'use strict';

const Controller = require('egg').Controller;
const room = 'default_room';

class ChatController extends Controller {
  async index() {
    const {
      socket,
      io,
    } = this.ctx;
    const id = socket.id;
    // 根据id给指定连接发送消息
    const nsp = io.of('/');
    socket.emit('res', 'res test');
    nsp.sockets[id].emit('res', 'hello ....');
    // 指定房间连接信息列表
    nsp.adapter.clients([ room ], (err, clients) => {
      console.log(JSON.stringify(clients));
    });
    //  给指定房间的每个人发送消息
    this.ctx.app.io.of('/').to(room).emit('online', this.ctx.socket.id + '上线了');
    // 断开连接
    this.ctx.socket.disconnect();

    // 监听connection（用户连接）事件，socket为用户连接的实例
    socket.on('disconnect', () => {
      // 监听用户断开事件
      console.log('用户' + socket.id + '断开连接');
    });
    console.log('用户' + socket.id + '连接');
    socket.on('msg', data => {
      // 监听msg事件（这个是自定义的事件）
      console.log(data); // 你好服务器
      socket.emit('msg', '你好浏览器');
      // 向socket用户发送信息
    });
  }
}
module.exports = ChatController;
