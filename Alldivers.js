import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, NavLink} from 'react-router-dom'

function Alldeliver(){

  const[loading, setloading] = useState(false);
  const[posts,setPosts] = useState([]);
  const[searchName,setSearchName]= useState("");
  
  useEffect(()=>{
    const loadPosts = async()=>{
      setloading(true);
      const response =await axios.get("http://localhost:8070/deliver/");
      setPosts(response.data);
      setloading(false);
    }
    loadPosts();
  }, []);


    const[dels, setDels] = useState([]);
    useEffect(()=>{
        function getDels(){
            axios.get("http://localhost:8070/deliver/").then((res)=>{
                setDels(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getDels();
    }, [dels]);

    function deleteDel(_id){
        axios.delete("http://localhost:8070/deliver/delete/"+_id).then((res)=>{
            console.log(res.data);
            alert("Deleted successfully!!");
        }).catch((err)=>{
            alert(err)
        });
        setDels(dels.filter((dels)=>dels._id != _id))
    }



    return(
 
        <div className = "container">
          
            <br></br><br></br><br></br>

            <center><h2 style={{color:"#2f4f4f"}}><i>All Order Deliveries.</i></h2></center>
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
                        <th>Delivery Person ID</th>
                        <th>Status</th>
                        <th>Ship Address</th>
                        <th>Bill Address</th>
                        <th>Phone</th>
                        <th>Method of Delivery</th>
                        <th>Deliver Date</th>

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
                      value.Dname.includes(searchName.toLowerCase())
                      ){
                      return value;
                  }

                }).map((del) => 
        
        <tr key={del._id}>
            <td>{del.Dname}</td>
            <td>{del.status}</td>
            <td>{del.Shipaddress}</td>
            <td>{del.Billaddress}</td>
            <td>{del.phone}</td>
            <td>{del.method}</td>
            <td>{del.date}</td>

        <div className="btn">
            <button type="button" className="btn btn-success btn-sm">Edit</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" class="btn btn-danger btn-sm" onClick={()=> deleteDel(del._id)}>Delete</button>
        </div>
        
        </tr>
       
    ))}

    </table>
      
            <Link to={"/add"} className="btn btn-success btn-sm">Add New Deliver</Link>
            <br></br><br></br><br></br>
<div class="card-group">
  <div class="card">
    <img src='/images/im4.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Click and collect</h5>
      <p class="card-text">The simple concept of placing an order online and having the item(s) ordered delivered to a local depot for collection at a time and date that suits you..</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im5.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Home delivery</h5>
      <p class="card-text">The option which allows you to place your order(s) online and make arrangements for the item(s) to be delivered to your home and (in some cases) work address at a time and date that is convenient for you. </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <div class="card">
    <img src='/images/im6.jpeg'  class="card-img-top" alt="#"/>
    <div class="card-body">
      <h5 class="card-title">Two man delivery</h5>
      <p class="card-text">This is generally used for the delivery of larger items, such as furniture or white goods. This also tends to offer the option for ‘room of choice’.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        
        </div>

        

        
    )
}

export default Alldeliver;