import Ngo from '../models/ngoModel';

export const getAllNgos = async (req,res) => {
    try{
        const ngo = await Ngo.find();
        res.status(200).json({
            status:'success',
            ngo,
            result:Ngo.length
        });
    }
    catch(error){
        res.status(400).json({message : "Bad request getngos"});
    }
}

 export const getNgo = async(req,res) =>{
     try {
         const ngo = await Ngo.findById(req.params.id)
         res.status(200).json({
             status:'success',
             ngo
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get ngo"})
     }
 }
 export const createNgo = async(req,res) =>{
     try {
         const ngo = await Ngo.create(req.body)
         res.status(201).json({
             status:'success',
             ngo
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get ngo"})
     }
 }

 export const updateAmbulance = async (req, res) => {
     try {
         const ngo = await Ngo.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
           runValidators: true
         });
         
           res.status(200).json({
             status: 'success',
             data: {
               ngo
             }
         
     })
    } catch (error) {
        res.status(400).json({message : "Bad request update ngo"})   
     }
    }

export const deleteNgo = async (req,res) => {
    try {
        const ngo = Ngo.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'success',
            data: null
          });
    } catch (error) {
        res.status(400).json({message : "Bad request delete Ngo"})   
        
    }
}
