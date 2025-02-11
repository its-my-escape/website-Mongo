var User = require('./user.model');


  function handleError(res, err) {
      return res.send(500, err);
    }

  // Get list of user
  exports.index = function(req, res) {
        User.find(function (err, users) {
        if(err) { return handleError(res, err); }
        return res.json(200, users);
      });
    } ;

  // Creates a new user in datastore.
  exports.create = function(req, res) {

    var user = {
       name: req.body.name,
       email: req.body.email,
       password : req.body.password 
    };
    User.create(user, function(err, user){
      if(err) {
        return handleError(res, err);
      }

    return res.json(201, user);
  })

};

exports.view = function(req , res ){
     User.findById(req.params.id, function (err, user) {
            if(err){return handleError(res, err);}
            console.log('Returning user: ' + user.name);
            return res.json(200, user);
        });
  }


 // Update an existing user in datastore.
  exports.update = function(req, res) {

       User.findById(req.body._id, function (err, user) {
            user.name = req.body.name
            user.email = req.body.email
            user.phone_num = req.body.phone_num
           
            if(req.body.gender != null){
            user.gender = req.body.gender}
            user.save(function (err) {
                if(err) { return handleError(res, err); }
                return res.send(200, 'Update successful');
            });
        });
     }

  // Deletes a user from datastore.
  exports.destroy = function(req, res) {
    console.log(req.params.id)
    User.remove({_id: req.params.id}, function(err){
        if(err){
           return handleError(res, err);
        }
      })};