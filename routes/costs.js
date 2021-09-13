//https requests
const express = require('express');
const Costs = require('../models/costs');

const router = express.Router();

//save costs
router.post('/cost/save', (req,res) =>{
    let newCost = new Costs(req.body);

    newCost.save((err) =>{ //callback function
        if(err){
            return res.status(400).json({
                 error:err
                });

                   }
                   return res.status(200).json({
                       success:"Costs saved successfully"
                   });
    });
});

//get costs or read cost
router.get('/costs',(req,res) =>{
    //to find costs(salary details)
    Costs.find().exec((err,costs) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:costs
        });
    });
});

//get a specific cost
router.get("/cost/:id",(req,res) =>{
    let costId = req.params.id;
   //to find specific id
    Costs.findById(costId,(err,cost) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            cost
        });
    });
}); 

//update costs
//to update one update thats why used id
router.put('/cost/update/:id',(req,res) =>{
    Costs.findByIdAndUpdate(
        req.params.id, //what parameter id to update
        {
            $set:req.body //to update all
        },
        (err,cost)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Updated successfully"
            });
        }
    );
});

//delete posts
router.delete('/cost/delete/:id',(req,res) =>{
    Costs.findByIdAndRemove(req.params.id).exec((err,deletedCost) =>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful", err
        });
        return res.json({
            message:"Delete successful", deletedCost
        });
    });
}); 

module.exports = router;