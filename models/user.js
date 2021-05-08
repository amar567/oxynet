const mongoose = require('mongoose')

const User = new mongoose.Schema(
	{
		email:{type:String,unique: true},
		password: { type: String},
		mobile:{type:String,unique: true},
		name:{type:String,unique: false},
		// cards:{
		// 	type:mongoose.schema.ObjectId,
		// 	ref: 'Card'
		// }
	},
	{ collection: 'users' }
)

const model = mongoose.model('User', User)

module.exports = model
