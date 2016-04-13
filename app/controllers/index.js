var
  express = require('express'),
  router = express.Router();

router.get("/", function (req, res) {
  res.render("index");
});

module.exports = function (app, config) {
  app.use(router);
};
