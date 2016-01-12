module.exports = function(app) {

  app.use('/api/users', require('./api/user/index'));
  app.use('/api/posts', require('./api/post/index'));
  app.use('/api/pictures', require('./api/picture/index'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|app|assets)/*')
   .get(function(req, res) {
    res.send(404);
  })

};

// a new router might need to be added at some stage i think

// Added a new route for somthing.

// HI Guys! this is a new line of text that i added


// going to add a new line to show up in diff