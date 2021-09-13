import React,{useState} from "react"
import axios from "axios";
import {NavLink,Link} from 'react-router-dom';

function AddConfOder(){

    const[Cname, setName] = useState("");
    const[address, setAddress] = useState("");
    const[phone, setPhone] = useState("");
    const[method, setMethod] = useState("");
    const[date, setDate] = useState("");

    function sendData(e){
        e.preventDefault();
        const newConf ={
            Cname,
            address,
            phone,
            method,
            date
        }

        axios.post("http://localhost:8070/confirm/add/confirm", newConf).then(()=>{
            alert("Confirmation done successfully")
            setName("");
            setAddress("");
            setPhone("");
            setMethod("");
            setDate("");
        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className = "container">
                <br></br><br></br><br></br>
                <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Thank You For Your Order!!. <hr></hr></h4><h5><p>We have received your order and we will contact you as soon as your package is shipped.Please fill below details to confirm your order.</p></h5>
</div>
<form onSubmit={sendData}>

  <div className="form-group">
    <label for="Cname">Customer Name</label>
    <input type="text" class="form-control" id="Cname" placeholder="Enter customer name"
    onChange={(e)=>{
        setName(e.target.value);
    }}/>
        
</div>

<div className="form-group">
    <label for="address">Customer Address</label>
    <input type="text" class="form-control" id="address" placeholder="Enter customer address"
    onChange={(e)=>{
        setAddress(e.target.value);
    }}/>
    
</div>

<div className="form-group">
    <label for="phone">Customer Phone Number</label>
    <input type="text" class="form-control" id="phone" placeholder="Enter customer phone"
       onChange={(e)=>{
        setPhone(e.target.value);
    }}/>
 
</div>

<div className="form-group">
    <label for="method">Payment Method</label>
    <input type="text" class="form-control" id="method" placeholder="Enter Pay method"
     onChange={(e)=>{
        setMethod(e.target.value);
    }}/>
   
</div>

<div className="form-group">
    <label for="date">Confirmation Date</label>
    <input type="text" class="form-control" id="date" placeholder="Enter date"
     onChange={(e)=>{
        setDate(e.target.value);
    }}/>
   
</div>

  <button type="submit" class="btn btn-primary">Confirm</button>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <Link to={"/c/"} type="submit"  class="btn btn-primary">Back</Link>

</form>


       
        </div>
        
    )
}

export default  AddConfOder;