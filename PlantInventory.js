import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function PlantInventory(){
     const [plant, setPlant] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/plantroute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
        getPlant()

    },[])
    console.warn(plant)
    function getPlant() {
        fetch("http://localhost:8070/plantroute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setPlant(resp)
              
                
               
            })
        })
    }


     function deletePlant(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/plantroute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getPlant()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Plant Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/addplant">Add New Plant</NavLink></button>
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
                <th>Plant ID</th>
                <th>Plant Name</th>
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
          
          .map((plant) =>
        
                 <tbody>
                <tr key={plant._id}>
                    <td>{plant.id}</td>
                    <td>{plant.name}</td>
                       <td>{plant.storageLevel}</td>
                        <td>{plant.reorderLevel}</td>
                          <td>{plant.storageDate}</td>
                           <td>{plant.stckManager}</td>
                            <td>{plant.productId}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deletePlant(plant._id)}>Delete</button></td>
                </tr>
                </tbody>
          )
            
      )}

                  </table>
                 </div>

        <div>
            <button className='back'><NavLink  activeClassName="active" to="/UI" >Back</NavLink></button>
        </div>
      

      
      
        </div>
    );
    
}
export default PlantInventory