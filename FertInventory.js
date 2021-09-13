import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function FertInventory(){
     const [fert, setFert] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/fertroute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
        getFert()

    },[])
    console.warn(fert)
    function getFert() {
        fetch("http://localhost:8070/fertroute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setFert(resp)
              
                
               
            })
        })
    }


     function deleteFert(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/fertroute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getFert()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Fertilizer Production Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/addfert">Add New Item</NavLink></button>
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
                <th>Manufacture Date</th>
                <th>Storage Level</th>
                <th>Reorder Level</th>
                <th>Latest Storage Date</th>
                <th>Stock Manager Incharge</th>
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
          
          .map((fert) =>
        
                 <tbody>
                <tr key={fert._id}>
                    <td>{fert.id}</td>
                    <td>{fert.name}</td>
                     <td>{fert.expDate}</td>
                      <td>{fert.manfDate}</td>
                       <td>{fert.storageLevel}</td>
                        <td>{fert.reorderLevel}</td>
                          <td>{fert.storageDate}</td>
                           <td>{fert.stckManager}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deleteFert(fert._id)}>Delete</button></td>
                </tr>
                </tbody>
          )
            
      )}

                  </table>
                 </div>
      

      
      
        </div>
    );
    
}
export default FertInventory