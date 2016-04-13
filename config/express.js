var express = require('express');
var glob = require('glob');

var logger = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app, config) {
  app.set('views', config.root + '/app/views');
  app.set('view engine', 'ejs');

  var env = process.env.NODE_ENV || 'development';
  app.locals.ENV = env;
  app.locals.ENV_DEVELOPMENT = env == 'development';

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static(config.root + '/public'));

  var controllers = glob.sync(config.root + '/app/controllers/**/*.js');
  controllers.forEach(function (controller) {
    require(controller)(app, config);
  });


  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.error(err, req.originalUrl);
    if (req.path.toLowerCase().indexOf("api") > -1) {
      // it is an api call, return json instead
      return res.json({ error: err.message });
    }
  });

};
