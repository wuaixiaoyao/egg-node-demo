// app/controller/jsonp/index.js
'use strict';

const Controller = require('egg').Controller;

class JsonpController extends Controller {
  async list() {
    const { ctx } = this;
    console.log('ctx.query:', ctx.query);
    ctx.body = {
      code: 200,
      data: [
        {
          id: 1,
          name: '天問',
        },
        {
          id: 2,
          name: '天问',
        },
        {
          id: 3,
          name: 'Tiven',
        },
      ],
      message: 'success',
    };
  }
}

module.exports = JsonpController;
