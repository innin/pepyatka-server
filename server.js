var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path')
  , engine = require('ejs-locals')

require('./core_ext')

// var path = require('path');
// if (path.existsSync('./configLocal.js')) {
//   var configLocal = require('./configLocal.js');

//   // mail = require('mail').Mail(
//   //   configLocal.getMailConfig());
//   conf = configLocal.getSiteConfig();
// }
// else {
//   log.error('Copy configDefault.js to configLocal.js.');
// }

app.configure(function() {
  app.engine('ejs', engine);
  app.set('view engine', 'ejs');

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/app/scripts/views');

  app.enable("jsonp callback");

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(logErrors);
  app.use(clientErrorHandler);
  app.use(errorHandler);
});

function clientErrorHandler(err, req, res, next) {
  if (req.xhr) {
    res.send(500, { error: 'Whoops!' });
  } else {
    next(err);
  }
}

function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

app.configure('development', function() {
  app.use(express.errorHandler());
});

var connections = {}

var server = http.createServer(app)
  , io = require('socket.io').listen(server)
  , socket = require('./io.js')
  , routes = require('./app/routes')(app, connections)

io.sockets.on('connection', socket.add_sockets(connections))

server.listen(app.get('port'), function() {
  console.log("Express server listening on port " + app.get('port'));
});
