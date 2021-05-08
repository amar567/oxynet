const mongoose = require('mongoose')

const card = new mongoose.Schema(
	{
        outofstock:{
            type:Boolean,
            default:false
        },
        quantity :  {
            type : String,
            required : true
        },
        shopName :  {
            type : String,
            required : true
        },
        address :  {
            type : String,
            required : true
        },
        city :  {
            type : String,
            required : true
        },
        state :  {
            type : String,
            required : true
        },
        cost : {
            type : Number,
            required : true
        },
        phoneNo1 : {
            type : Number,
            required : true
        },
        phoneNo2 :  {
            type : Number,
            required : true
        },
        reported : [
            {
                email : String,
                reason : String,
            }
        ]
    } ,
	{ collection: 'cards' }
)

const model = mongoose.model('Card', card)

module.exports = model
