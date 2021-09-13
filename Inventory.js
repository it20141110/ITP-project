import React, { useState,useEffect } from 'react';
import './seed.css';
import {NavLink,Link} from 'react-router-dom';
import axios from "axios";

function Inventory(){
     const [seed, setSeed] = useState([])
      const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const[searchTitle,setSearchTitle]=useState("");
    
      useEffect(()=>{
        const loadPosts =async () =>{
            setLoading(true);
            const response = await axios.get("http://localhost:8070/seedroute/");
            setPosts(response.data);
            setLoading(false);
        }
        loadPosts();

    },[]);

      useEffect(() => {
        getSeed()

    },[])
    console.warn(seed)
    function getSeed() {
        fetch("http://localhost:8070/seedroute/").then((result) => {
            result.json().then((resp) => {
                //console.warn(resp)
                setSeed(resp)
              
                
               
            })
        })
    }


     function deleteSeed(id) {
         if (window.confirm('Are You Sure?')) {
             window.location.reload(false);
            fetch('http://localhost:8070/seedroute/delete/' + id, {
                method: 'DELETE',
            }).then((result) => {
                result.json().then((resp) => {
                    console.warn(resp)
                    getSeed()

                })

            })
        }
    }

   

    
    
    return(
        <div>
        <h2><u>Seed Inventory Profile</u></h2>
        <button className="addseed"><NavLink className="add-nav" activeClassName="active" to="/add">Add New Seed</NavLink></button>
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
                <th>Seed ID</th>
                <th>Seed Name</th>
                <th>Expiration Date</th>
                <th>Packed Date</th>
                <th>Storage Level</th>
                <th>Reorder Level</th>
                <th>Latest Storage Date</th>
                <th>Stock Manager Incharge</th>
                <th>Action1</th>
                <th>Action2</th>
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
          
          .map((seed) =>
        
                 <tbody>
                <tr key={seed._id}>
                    <td>{seed.id}</td>
                    <td>{seed.name}</td>
                     <td>{seed.expDate}</td>
                      <td>{seed.packDate}</td>
                       <td>{seed.storageLevel}</td>
                        <td>{seed.reorderLevel}</td>
                          <td>{seed.storageDate}</td>
                           <td>{seed.stckManager}</td>
                            <td><button >Edit</button></td>
                                <td><button onClick={() => deleteSeed(seed._id)}>Delete</button></td>
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
export default Inventory