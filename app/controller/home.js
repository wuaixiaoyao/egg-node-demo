'use strict';

const Controller = require('egg').Controller;
// const MongoClient = require('mongodb').MongoClient;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const title = Math.random() * 1000;
    const { app, query } = ctx;
    // 给谁发, socket连接的id
    const id = query.id;
    console.log('-------');
    console.log('id是', id);
    const nsp = app.io.of('/');
    if (nsp.sockets[id]) {
      // 通过id给指定socket连接发送消息
      nsp.sockets[id].emit('res', 'hello http....');
    }
    await ctx.render('index.html', {
      title: `我是随机数： ${title}`,
    });
    // this.add();
  }

  async listReposByOrg() {
    // 获取请求参数
    const org = this.ctx.query.org || 'eggjs';
    // 调用业务逻辑
    const result = await this.ctx.service.github.listReposByOrg(org);
    // 渲染数据
    this.ctx.body = {
      code: 200,
      data: result,
    };
  }

  async add() {
    const ctx = this.ctx;
    let count = ctx.cookies.get('count');
    count = count ? Number(count) : 0;
    ctx.cookies.set('count', ++count);
    ctx.body = count;
  }

  async remove() {
    const ctx = this.ctx;
    ctx.cookies.set('count', null);
    ctx.status = 204;
  }

  async mogoTest() {
    const { ctx } = this;
    // const url = 'mongodb://localhost:27017/runoob';

    // MongoClient.connect(url, {
    //   useNewUrlParser: true,
    // }, function(err, db) {
    //   if (err) throw err;
    //   console.log('数据库已创建!');
    //   db.close();
    // });
    await ctx.render('index.html', {
      title: 'mogo 测试',
    });
  }
}

module.exports = HomeController;
