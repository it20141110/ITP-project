import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function CropInventory(){
     const [crop, setCrop] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/croproute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
        getCrop()

    },[])
    console.warn(crop)
    function getCrop() {
        fetch("http://localhost:8070/croproute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setCrop(resp)
              
                
               
            })
        })
    }


     function deletCrop(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/croproute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getCrop()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Crop Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/addcrop">Add New Crop</NavLink></button>
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
                <th>Crop ID</th>
                <th>Crop Name</th>
                <th>Storage Level</th>
                <th>Reorder Level</th>
                <th>Latest Storage Date</th>
                <th>Stock Manager Incharge</th>
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
          
          .map((crop) =>
        
                 <tbody>
                <tr key={crop._id}>
                    <td>{crop.id}</td>
                    <td>{crop.name}</td>
                       <td>{crop.storageLevel}</td>
                        <td>{crop.reorderLevel}</td>
                          <td>{crop.storageDate}</td>
                           <td>{crop.stckManager}</td>
                            <td>{crop.productId}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deletCrop(crop._id)}>Delete</button></td>
                </tr>
                </tbody>
          )
            
      )}

                  </table>
                 </div>
      

      
      
        </div>
    );
    
}
export default CropInventory