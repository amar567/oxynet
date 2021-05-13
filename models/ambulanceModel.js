import mongoose from 'mongoose';


const ambulanceSchema = new mongoose.Schema({
    
    phoneNumber :{
        type: String,
        required:[true,'required a phone number']
    },
    availability: Boolean,
    price:{
        type: String,
        required : [true, 'requied the ambulance price']
    },
    rangingArea:{
        type: String,
        required :[true, 'area of the ambulanced noticed']
    },
    lastAvailabity:{
        type:String,
        enum: ['avaiable','notConfirmed','confirmed']
    },
    parentId:{
        type:String
    },
    reportedBy:{
        type:Number,
        default:0
    },
    district :  {
        type : String,
        required : true
    },
    state :  {
        type : String,
        required : true
    },
    reported : [
        {
            email : String,
            reason : String,
        }
    ]

});


const Ambulance  = mongoose.model('Ambulance', ambulanceSchema);
export default Ambulance ;