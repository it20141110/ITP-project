const router=require("express").Router();
let Seed = require("../models/seedmodel");

router.route("/add").post((req,res)=>{
     const id=req.body.id;
     const name=req.body.name;
     const expDate=Date(req.body.expDate);
     const packDate=Date(req.body.packDate);
     const storageLevel=req.body.storageLevel;
     const reorderLevel=req.body.reorderLevel;
     const storageDate=Date(req.body.storageDate);
     const stckManager=req.body.stckManager;

     const newSeed = new Seed({

        id,
        name,
        expDate,
        packDate,
        storageLevel,
        reorderLevel,
        storageDate,
        stckManager

     })

     newSeed.save().then(()=>{
         res.json("Seed Inserted")
     }).catch((err)=>{
           console.log(err);
     })
       
})

router.route("/").get((req,res) =>{
    Seed.find().then((seeds)=>{
          res.json(seeds)
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/update/:id").put(async (req,res)=>{
  let seedid = req.params.id;
  const {id,name,expDate,packDate,storageLevel,reorderLevel,storageDate,stckManager}=req.body;
  
  const updateSeed = {
       
        id,
        name,
        expDate,
        packDate,
        storageLevel,
        reorderLevel,
        storageDate,
        stckManager
  }

  const update = await Seed.findByIdAndUpdate(seedid,updateSeed)
  .then(()=>{
         res.status(200).send({status:"Seed updated"})
  }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error in updating data" ,error:err.message});
  })
 

})

router.route("/delete/:id").delete(async(req,res)=>{
   let seedid= req.params.id;
   await Seed.findByIdAndDelete(seedid).then(()=>{
     res.status(200).send({status:"Seed deleted"});
   }).catch((err) =>{
       console.log(err.message);
      res.status(500).send({status:"Error in deleting data" ,error:err.message});
   })
})

router.route("/get/:id").get(async(req,res)=>{
   let seedid=req.params.id;
   const xa=await Seed.findById(seedid).then((seed)=>{
        res.status(200).send({status:"Seed details fetched",seed})
   }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error in fetching data" ,error:err.message});
   })
})



module.exports = router;