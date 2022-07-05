'use strict';

const Controller = require('egg').Controller;
class SearchController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `搜索参数: ${ctx.query.name}`;
  }

  async show() {
    const { ctx } = this;
    const res = await ctx.service.search.name('test');
    ctx.body = {
      res,
      code: 201,
      message: 'success',
    };
    ctx.status = 201;
  }
}

module.exports = SearchController;
