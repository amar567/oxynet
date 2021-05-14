import User from '../models/userModel.js';

export const getAllUsers = async (req,res) => {
    try{
        const user = await User.find().populate('card');
        res.status(200).json({
            status:'success',
            user,
            result:user.length
        });
    }
    catch(error){
        res.status(400).json({message : "Bad request getUsers"});
    }
}

 export const getUser = async(req,res) =>{
     try {
         const user = await User.findById(req.params.id).populate('card')
         res.status(200).json({
             status:'success',
             user
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get user"})
     }
 }
 export const createUser = async(req,res) =>{
     try {
         const user = await User.create(req.body)
         res.status(201).json({
             status:'success',
             user
            });
     } catch (error) {
         res.status(400).json({message : error})
     }
 }

 export const updateUser = async (req, res) => {
     try {
         const user = await User.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
           runValidators: true
         });
         
           res.status(200).json({
             status: 'success',
             data: {
               user
             }
         
     })
    } catch (error) {
        res.status(400).json({message : "Bad request update user"})   
     }
    }

export const deleteUser = async (req,res) => {
    try {
        const user = User.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'success',
            data: null
          });
    } catch (error) {
        res.status(400).json({message : "Bad request delete user"})   
        
    }
}
