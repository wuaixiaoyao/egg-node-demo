'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async ping() {
    const { ctx } = this;
    const message = ctx.args[0];
    await ctx.socket.emit('res', `Hi! I've got your message: ${message}`);
  }

  //   say() {
  //     const { ctx } = this;
  //     console.log('ctx');
  //   }

}

module.exports = DefaultController;
