import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique: true
    },
	password: {
         type: String
    },
	mobile:{
        type:String,
        unique: true
    },
    name:{
        type:String,
    },
    card:{
        type: mongoose.Schema.ObjectId,
        ref: 'Ambulance'
    }
});

const User = mongoose.model('User', userSchema);
export default  User;
