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
})