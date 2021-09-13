import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function EquipInventory(){
     const [equip, setEquip] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/equiproute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
        getEquipment()

    },[])
    console.warn(equip)
    function getEquipment() {
        fetch("http://localhost:8070/equiproute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setEquip(resp)
              
                
               
            })
        })
    }


     function deleteEquipment(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/equiproute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getEquipment()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Equipment Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/addequip">Add New Equipment</NavLink></button>
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
                <th>Equipment ID</th>
                <th>Equipment Name</th>
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
          
          .map((equip) =>
        
                 <tbody>
                <tr key={equip._id}>
                    <td>{equip.id}</td>
                    <td>{equip.name}</td>
                       <td>{equip.storageLevel}</td>
                        <td>{equip.reorderLevel}</td>
                          <td>{equip.storageDate}</td>
                           <td>{equip.stckManager}</td>
                            <td>{equip.productId}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deleteEquipment(equip._id)}>Delete</button></td>
                </tr>
                </tbody>
          )
            
      )}

                  </table>
                 </div>
      

      
      
        </div>
    );
    
}
export default EquipInventory