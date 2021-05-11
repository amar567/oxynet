import Ambulance from '../models/ambulanceModel';

export const getAllAmbulances = async (req,res) => {
    try{
        const Ambulances = await Ambulance.find();
        res.status(200).json({
            status:'success',
            Ambulances,
            result:Ambulance.length
        });
    }
    catch(error){
        res.status(400).json({message : "Bad request getAmbulances"});
    }
}

 export const getAmbulance = async(req,res) =>{
     try {
         const ambulance = await Ambulance.findById(req.params.id)
         res.status(200).json({
             status:'success',
             ambulance
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get ambulance"})
     }
 }
 export const createAmbulance = async(req,res) =>{
     try {
         const ambulance = await Ambulance.create(req.body)
         res.status(201).json({
             status:'success',
             ambulance
            });
     } catch (error) {
         res.status(400).json({message : "Bad request get ambulance"})
     }
 }

 export const updateAmbulance = async (req, res) => {
     try {
         const ambulance = await Ambulance.findByIdAndUpdate(req.params.id, req.body, {
           new: true,
           runValidators: true
         });
         
           res.status(200).json({
             status: 'success',
             data: {
               ambulance
             }
         
     })
    } catch (error) {
        res.status(400).json({message : "Bad request update ambulance"})   
     }
    }

export const deleteAmbulance = async (req,res) => {
    try {
        const ambulance = Ambulance.findByIdAndDelete(req.params.id)

        res.status(204).json({
            status: 'success',
            data: null
          });
    } catch (error) {
        res.status(400).json({message : "Bad request delete ambulance"})   
        
    }
}
