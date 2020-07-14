'use strict';

const Controller = require('egg').Controller;
class UserController extends Controller {
  async info() {
    const {
      ctx,
    } = this;
    const {
      id: userId,
    } = ctx.params;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo;
  }

}

module.exports = UserController;
