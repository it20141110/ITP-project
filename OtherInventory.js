import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function OtherInventory(){
     const [other, setOther] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/otherroute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
       getOther()

    },[])
    console.warn(other)
    function getOther() {
        fetch("http://localhost:8070/otherroute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setOther(resp)
              
                
               
            })
        })
    }


     function deleteOther(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/otherroute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                   getOther()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Other Sales Product Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/addother">Add New Item</NavLink></button>
         <input className="search1"
        style={{ width: "15%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      /><br/><br/>
       <div className="table" >
             <table border="1" cellPadding="12" className="center" >
                  <thead>
		         <tr>
                <th>Item ID</th>
                <th>Item Name</th>
                <th>Expiration Date</th>
                <th>Packed Date</th>
                <th>Storage Level</th>
                <th>Reorder Level</th>
                <th>Latest Storage Date</th>
                <th> Manager Incharge</th>
                 <th>Product ID</th>
                <th>Action</th>
            </tr>
            </thead>
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.reorderLevel.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          
          .map((item) =>
        
                 <tbody>
                <tr key={item._id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                     <td>{item.expDate}</td>
                      <td>{item.packDate}</td>
                       <td>{item.storageLevel}</td>
                        <td>{item.reorderLevel}</td>
                          <td>{item.storageDate}</td>
                           <td>{item.stckManager}</td>
                           <td>{item.productId}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deleteOther(item._id)}>Delete</button></td>
                </tr>
                </tbody>
          )
            
      )}

                  </table>
                 </div>
      

      
      
        </div>
    );
    
}
export default OtherInventory