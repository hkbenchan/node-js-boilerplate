var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    expectedPort = parseInt(process.env.APP_PORT || 3000);

// console.log("current env: " + env, rootPath);
console.log('current env: %s', env);
console.log('rootPath: %s', rootPath);

var config = {
  development: {
    root: rootPath,
    port: expectedPort,
  },

  test: {
    root: rootPath,
    port: expectedPort,
  },

  production: {
    root: rootPath,
    port: expectedPort,
  },

  stage: {
    root: rootPath,
    port: expectedPort,
  }
};

module.exports = config[env];
