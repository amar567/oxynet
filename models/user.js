const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		mail:{type:String,unique: true},
		password: { type: String},
		mobile:{type:String,unique: true},
		uname:{type:String,unique: false}
	},
	{ collection: 'users' }
)

const model = mongoose.model('User', User)

module.exports = model
