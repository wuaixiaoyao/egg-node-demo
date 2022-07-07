/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/

  const config = (exports = {});
  // 配置上传
  config.multipart = {
    fileSize: '50mb',
    mode: 'stream',
    fileExtensions: ['.xls', '.txt'], // 扩展几种上传的文件格式
  };
  // 安全配置
  config.security = {
    csrf: {
      // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
      headerName: 'x-csrf-token',
      enable: false,
    },
  };
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '152.136.221.155',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '123456',
      // 数据库名
      database: 'sys',
    },
    // 所有数据库配置的默认值
    default: {},
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '152.136.221.155',
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: 'sys',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
      // 左边写成.html后缀，会自动渲染.html文件
    },
  };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: ['auth'],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1587717327146_8903';

  // add your middleware config here
  // 加载 errorHandler 中间件
  config.middleware = ['errorHandler'];
  config.errorHandler = {
    match: '/api',
  };
  // add your user config here
  const userConfig = {
    myAppName: 'egg demo',
  };

  config.github = {
    endpoint: 'https://api.github.com',
    pageCount: 10,
  };

  // add middleware robot
  config.middleware = ['robot'];
  // robot's configurations
  config.robot = {
    ua: [/Baiduspider/i],
  };

  return {
    ...config,
    ...userConfig,
  };
};
