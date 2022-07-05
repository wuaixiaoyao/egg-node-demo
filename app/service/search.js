'use strict';
const Service = require('egg').Service;
class SearchService extends Service {
  async name(name) {
    return {
      data: [
        `搜索参数: ${name}`,
        `搜索参数: ${name}1`,
        {
          [name]: name,
        },
      ],
    };
    // ctx.body = `搜索参数: ${ctx.query.name}`;
  }
}

module.exports = SearchService;
