var jwt = require('jsonwebtoken')

var secret = 'pieouh06v123bjeohg2180y549guOi443ihprigv34cwghb4ro3o'

module.exports = {
	secret : 'pieouh06v123bjeohg2180y549guOi443ihprigv34cwghb4ro3o',

	login: function(req, res){
		User.findOne({name: req.param('name'), password: req.param("password")}).exec(function(err, user){
			if (err) {
				return res.serverError(err)
			}
			if (!user) {
				return res.send('Login Failed')
			}
			else{
				token = jwt.sign({
					user },
					secret);
				var data = {
					user: user,
					token: token
				}
				console.log(data);
				return res.send(data)
			}
		})
	},
	register: function(req, res){
		User.create(req.body).exec(function(err, user){
			if (err) {
				return res.serverError(err)
			}
			return res.send(user)
		})
	},

};
