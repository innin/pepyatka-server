// var user = require('./routes/users')
// var session = require('./routes/session')

var home = require('./routes/index')
  , posts = require('./routes/posts')
  , comments = require('./routes/comments')
  , timeline = require('./routes/timeline')

var models = require('./models');

var helpers = function(req, res, next) {
  res.locals.logged_in = function() {
    return req.session.user_id !== undefined
  };

  next();
};

var noJSONP = function(req, res, next) {
  delete req.query.callback;
  next();
}

var findUser = function(req, res, next) {
  if (req.session.user_id === undefined) {
    models.User.anon(function(user_id) {
      req.session.user_id = user_id;
      
      next()
    });
  } else {
    next()
  }
}

var getUser = function(req, res, next) {
  models.User.find(req.session.user_id, function(user) {
    res.locals.current_user = user

    next();
  })
}

module.exports = function(app, connections) {
  app.all('/*', helpers, findUser, getUser);

  // user.add_routes(app);
  // session.add_routes(app);

  // In theory we can send just right socket based on a user session
  home.add_routes(app, connections);
  posts.add_routes(app, connections);
  comments.add_routes(app, connections);
  timeline.add_routes(app, connections);
};
