const router = require("express").Router();
let Deli = require("../models/deliver");

//create function

//http://localhost:8070/deliver/add

router.route("/add").post((req,res) => {

    const Dname = req.body.Dname;
    const status = req.body.status;
    const Shipaddress = req.body.Shipaddress;
    const Billaddress = req.body.Billaddress;
    const phone=req.body.phone;
    const method  = req.body.method;
    const date = req.body.date;

    const newdel = new Deli({
        Dname,
        status,
        Shipaddress,
        Billaddress,
        phone,
        method,
        date
    })

    //pass the obj to mongo db
    newdel.save().then(()=> {
        res.json("Delivery Status Added!") //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })
})

//get method
//http://localhost:8070/confirm/

router.route("/").get((req,res)=>{
    Deli.find().then((delivers)=> {
        res.json(delivers) //send response from json format to the frontend
    }).catch((err)=>{
        console.log(err);
    })
})

//: is used to fetch the relevent id value for update
//put method is used to update date we can use post method as well as for this function
router.route("/update/:id").put(async(req,res)=>{
    let userid = req.params.id;
    //used in re-structure
    const{Dname,status,Shipaddress,Billaddress,phone,method,date} = req.body;

    const updateDelivery = {
        Dname,
        status,
        Shipaddress,
        Billaddress,
        phone,
        method,
        date
    }

    //http://localhost:8070/confirm/update/id
    //async fun is wait for a response
    const update = await Deli.findByIdAndUpdate(userid, updateDelivery ).then(() => {
        res.status(200).send({status : "Status Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})

//delete method
router.route("/delete/:id").delete(async(req,res) => {
let userid = req.params.id;

await Deli.findByIdAndDelete(userid).then(() => {
    res.status(200).send({status : "Status Deleted"})
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user", error : err.message});
})
})

//search function
router.route("/get/:id").get(async(req,res)=> {
    let userid = req.params.id;

    const user = await Deli.findById(userid).then((deliver) => {
        res.status(200).send({status : "Order Tracked",deliver})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with fetch user", error : err.message});
    })
})


module.exports = router;