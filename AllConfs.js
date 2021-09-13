import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, NavLink} from 'react-router-dom'


function Allconf(){

  const[loading, setloading] = useState(false);
  const[posts,setPosts] = useState([]);
  const[searchName,setSearchName]= useState("");

useEffect(()=>{
  const loadPosts = async()=>{
    setloading(true);
    const response =await axios.get("http://localhost:8070/confirm/c/");
    setPosts(response.data);
    setloading(false);
  }
  loadPosts();
}, []);



    const[confs, setConfs] = useState([]);
    
    useEffect(()=>{
        function getconfs(){
            axios.get("http://localhost:8070/confirm/c/").then((res)=>{
                setConfs(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getconfs();
    }, [confs]);

    function deleteConf(_id){
        axios.delete("http://localhost:8070/confirm/delete/"+_id).then((res)=>{
            console.log(res.data);
            alert("Deleted successfully!!");
        }).catch((err)=>{
            alert(err)
        });
        setConfs(confs.filter((confs)=>confs._id != _id))
    }





    return(

        <div className = "container">
             <br></br><br></br><br></br>
            <center><h2 style={{color:"#2f4f4f"}}><i>All Order Confirmations.</i></h2></center>
            <br></br><br></br><br></br>
            <input className="Saerch"
            style={{width:"1100px",height:"50px" }}
            type="text"
            placeholder="Search..."
            onChange={(e)=> setSearchName(e.target.value)}/>

           
            <br></br><br></br><br></br><br></br>


            <table className="table">
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Method of payment</th>
                        <th>Confirm Date</th>
                    </tr>
                </thead>
                {loading ? (
           <button class="btn btn-primary" type="button" disabled>
           <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
           Loading...
         </button>
            ):(
                posts
                .filter((value)=>{
                    if(searchName === ""){
                        return value;
                    }else if(
                        value.Cname.includes(searchName.toLowerCase())
                        ){
                        return value;
                    }
                }).map((conf) => 
       
        <tr key={conf._id}>
            <td>{conf.Cname}</td>
            <td>{conf.address}</td>
            <td>{conf.phone}</td>
            <td>{conf.method}</td>
            <td>{conf.date}</td>
            

            <div className="btn">
            <button type="button" className="btn btn-success btn-sm">Update</button>
 &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger btn-sm" onClick={()=> deleteConf(conf._id)}>Delete</button>
        </div>
        </tr> 
       
    ))}
            </table>

            <Link to={"/add/confirm"} className="btn btn-success btn-sm">Add New Order</Link>

<br></br><br></br><br></br>
<div class="card-group">
  <div class="card">
    <img src='/images/im1.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Organic Food Products</h5>
      <p class="card-text">All our products are organic.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im2.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Other Equipments</h5>
      <p class="card-text">We will deliver all the products to your door step.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im3.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Easy Payment</h5>
      <p class="card-text">We provide our servise to our valued customers by introducing easy payment methods via online.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>



        
    )
}

export default Allconf;