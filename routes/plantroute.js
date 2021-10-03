const router=require("express").Router();
let Plant = require("../models/plantmodel");

router.route("/add").post((req,res)=>{
     const id=req.body.id;
     const name=req.body.name;
     const storageLevel=req.body.storageLevel;
     const reorderLevel=req.body.reorderLevel;
     const storageDate=Date(req.body.storageDate);
     const stckManager=req.body.stckManager;
     const productId=req.body.productId;

     const newPlant = new Plant({

        id,
        name,
        storageLevel,
        reorderLevel,
        storageDate,
        stckManager,
        productId

     })

     newPlant.save().then(()=>{
         res.json("Plant Inserted")
     }).catch((err)=>{
           console.log(err);
     })
       
})

router.route("/").get((req,res) =>{
    Plant.find().then((plants)=>{
          res.json(plants)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
  let plantid = req.params.id;
  const {id,name,storageLevel,reorderLevel,storageDate,stckManager,productId}=req.body;
  
  const updatePlant = {
       
        id,
        name,
        storageLevel,
        reorderLevel,
        storageDate,
        stckManager,
        productId
  }

  const update = await Plant.findByIdAndUpdate(plantid,updatePlant)
  .then(()=>{
         res.status(200).send({status:"Plant updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error in updating data" ,error:err.message});
  })
 

})

router.route("/delete/:id").delete(async(req,res)=>{
   let plantid= req.params.id;
   await Plant.findByIdAndDelete(plantid).then(()=>{
     res.status(200).send({status:"Plant deleted"});
   }).catch((err) =>{
       console.log(err.message);
      res.status(500).send({status:"Error in deleting data" ,error:err.message});
   })
})

router.route("/get/:id").get(async(req,res)=>{
   let plantid=req.params.id;
   const xa=await Plant.findById(plantid).then((plant)=>{
        res.status(200).send({status:"Plant details fetched",plant})
   }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in fetching data" ,error:err.message});
   })
})



module.exports = router;