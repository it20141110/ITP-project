const router = require("express").Router();
let Confirm = require("../models/confirm");

//create function

//http://localhost:8070/confirm/add

router.route("/add/confirm").post((req,res) => {

    const Cname = req.body.Cname;
    const address = req.body.address;
    const phone=req.body.phone;
    const method  = req.body.method;
    const date = req.body.date;

    const newconf = new Confirm({
        Cname,
        address,
        phone,
        method,
        date
    })


    //search
      let term = req.body.searchTerm

    //pass the obj to mongo db
    newconf.save().then(()=> {
        res.json("Confirmation Added!") //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })

    if(term){
        Confirm.find(findArgs)
        .find({$text:{$search: term}})
    }
})

//get method
//http://localhost:8070/confirm/c/

router.route("/c/").get((req,res)=>{
    Confirm.find().then((confirms)=> {
        res.json(confirms) //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })
})

//: is used to fetch the relevent id value for update
//put method is used to update date we can use post method as well as for this function
router.route("/update/:id").put(async(req,res)=>{
    let userid = req.params.id;
    //used in re-structure
    const{name,address,phone,method,date} = req.body;

    const updateConf = {
        name,
        address,
        phone,
        method,
        date
    }

    //http://localhost:8070/confirm/update/id
    //async fun is wait for a response
    const update = await Confirm.findByIdAndUpdate(userid, updateConf).then(() => {
        res.status(200).send({status : "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete method
router.route("/delete/:id").delete(async(req,res) => {
let userid = req.params.id;

await Confirm.findByIdAndDelete(userid).then(() => {
    res.status(200).send({status : "User Deleted"})
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error : err.message});
})
})

//search function
router.route("/get/:id").get(async(req,res)=> {
    let userid = req.params.id;

    const user = await Confirm.findById(userid).then((confirm) => {
        res.status(200).send({status : "User Fetched",confirm})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user", error : err.message});
    })
})


module.exports = router;