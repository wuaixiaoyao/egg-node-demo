/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    // mysql: {
    //   // 单数据库信息配置
    //   client: {
    //     // host
    //     host: 'localhost',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'root',
    //     // 密码
    //     password: 'Yanglei521',
    //     // 数据库名
    //     database: 'shop',
    //   },
    //   // 所有数据库配置的默认值
    //   default: {

    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },
  };
  // config.mysql = {
  //   // 单数据库信息配置
  //   client: {
  //     // host
  //     host: 'localhost',
  //     // 端口号
  //     port: '3306',
  //     // 用户名
  //     user: 'root',
  //     // 密码
  //     password: 'Yanglei521',
  //     // 数据库名
  //     database: 'shop',
  //   },
  //   // 所有数据库配置的默认值
  //   default: {

  //   },
  //   // 是否加载到 app 上，默认开启
  //   app: true,
  //   // 是否加载到 agent 上，默认关闭
  //   agent: false,
  // };
  // config.view = {
  //   defaultViewEngine: 'nunjucks',
  //   mapping: {
  //     '.html': 'nunjucks',
  //     // 左边写成.html后缀，会自动渲染.html文件
  //   },
  // };

  config.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/': {
        connectionMiddleware: [ 'auth' ],
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
  config.middleware = [];

  // add your user config here
  const userConfig = {
    myAppName: 'egg demo',
  };


  return {
    ...config,
    ...userConfig,
  };
};
