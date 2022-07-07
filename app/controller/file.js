'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

class FileController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `搜索参数: ${ctx.query.name}`;
  }

  async upload() {
    const { ctx } = this;
    const { request: req } = ctx;
    console.log('-------------------files[0]--------------', req.body); // 上传的文件信息
    console.log(`已存在此文件${fs.existsSync(req.files[0].originalname)}`);
    if (fs.existsSync(req.files[0].originalname)) {
      console.log(`${req.files[0].originalname}已存在`);
      return;
    }
    let des_file = __dirname + '/fileList/' + req.files[0].originalname;
    console.log('__dirname', __dirname);
    fs.readFile(req.files[0].path, function (err, data) {
      fs.writeFile(des_file, 'utf8', data, function (err) {
        if (err) {
          console.log(err);
        } else {
          const response = {
            message: 'File uploaded successfully',
            filename: req.files[0].originalname,
            des_file: 'des_file',
          };
          ctx.body = response;
        }
      });
    });
  }
}

module.exports = FileController;
