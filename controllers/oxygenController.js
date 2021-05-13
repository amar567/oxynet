import Oxygen from '../models/oxygenModel';

export const getAllNgos = async (req,res) => {
    try{
        const ngo = await Oxygen.find();
        res.status(200).json({
            status:'success',
            ngo,
            result:Oxygen.length
        });
    }
    catch(error){
        res.status(400).json({message : "Bad request getngos"});
    }
}

 export const getNgo = async(req,res) =>{
     try {
         const ngo = await Oxygen.findById(req.params.id)
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
         const ngo = await Oxygen.create(req.body)
         res.status(201).json({
             status:'success',
             ngo
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get ngo"})
     }
 }

 export const updateNgo = async (req, res) => {
     try {
         const ngo = await Oxygen.findByIdAndUpdate(req.params.id, req.body, {
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
        const ngo = Oxygen.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'success',
            data: null
          });
    } catch (error) {
        res.status(400).json({message : "Bad request delete Oxygen"})   
        
    }
}
