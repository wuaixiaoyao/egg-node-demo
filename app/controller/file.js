'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
//故名思意 异步二进制 写入流
const awaitWriteStream = require('await-stream-ready').write;
//管道读入一个虫洞。
const sendToWormhole = require('stream-wormhole');
const dayjs = require('dayjs');
class FileController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = `搜索参数: ${ctx.query.name}`;
  }

  async create() {
    const stream = await this.ctx.getFileStream();
    console.log('-----------获取数据 start--------------');
    console.log(stream.fields);
    console.log('-----------获取数据 end--------------');
    // 基础的目录
    const uplaodBasePath = 'app/public/uploads';
    // 生成文件名
    const filename = `${Date.now()}${Number.parseInt(Math.random() * 1000)}${path.extname(stream.filename).toLocaleLowerCase()}`;
    // 生成文件夹
    const dirname = dayjs(Date.now()).format('YYYY/MM/DD');
    function mkdirsSync(dirname) {
      if (fs.existsSync(dirname)) {
        return true;
      } else {
        if (mkdirsSync(path.dirname(dirname))) {
          fs.mkdirSync(dirname);
          return true;
        }
      }
    }
    mkdirsSync(path.join(uplaodBasePath, dirname));
    // 生成写入路径
    const target = path.join(uplaodBasePath, dirname, filename);
    // 写入流
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      this.error();
    }
    this.success({ url: path.join('/public/uploads', dirname, filename) });
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
