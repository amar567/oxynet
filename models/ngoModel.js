import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
    msg:{
        type: String
    },
    supplies:{
        type: String
    },
    phoneNumber:{
        type: String
    },
    altPhoneNumber:{
        type: String
    },
    regId:{
        type: String
    },
    instagram:{
        type: String
    },
    facebook:{
        type: String
    },
    twitter:{
        type: String
    },
    whatsapp:{
        type: String
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
    ],
    verified: {
        type:Boolean,
        default: false
    }
})

const Ngo  = mongoose.model('Ngo', ngoSchema);
export default Ngo ;