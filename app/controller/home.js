'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const title = Math.random() * 1000;
    const { app, query } = ctx;
    // 给谁发, socket连接的id
    const id = query.id;
    console.log('-------');
    console.log('id是');
    const nsp = app.io.of('/');
    if (nsp.sockets[id]) {
      // 通过id给指定socket连接发送消息
      nsp.sockets[id].emit('res', 'hello http....');
    }
    await ctx.render('index.html', {
      title: `我是随机数： ${title}`,
    });
  }
}

module.exports = HomeController;
