'use strict';
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'localhost',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: 'Yanglei521',
    // 数据库名
    database: 'shop',
  },
  // 所有数据库配置的默认值
  default: {},
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

exports.sequelize = {
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
