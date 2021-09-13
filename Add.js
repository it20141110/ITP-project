import React,{Component, useState} from "react"
import axios from "axios"
import {NavLink, useHistory} from "react-router-dom"
import './seed.css';

function Add(){
    let history = useHistory();
    const [id, setId] = useState("")
    const [name, setseedName] = useState("")
    const [expDate, setexpDate] = useState("")
    const [packDate, setpackedDate] = useState("")
    const [storageLevel, setstorageLevel] = useState("")
    const [reorderLevel, setreorderLevel] = useState("")
    const [storageDate, setstoreDate] = useState("")
    const [stckManager, setStckMang] = useState("")
    const [nameErr,setNameErr]=useState(false)
    const [idErr,setidErr]=useState(false)
     const [seedidErr,setseedidErr]=useState(false)
    



    function addseed(e){
       
        e.preventDefault();
        const newSeed={
           id,
           name,
           expDate,
           packDate,
           storageLevel,
           reorderLevel,
           storageDate,
           stckManager

        }
        axios.post("http://localhost:8070/seedroute/add",newSeed).then(()=>{
              if(name.length<3 || stckManager.substring(0,2) !='SM'|| id.substring(0,2) !='SE'){
             alert("Entered Invalid Data!!!")
         }else{
            alert("Seed Added Successfully!")
             history.push('/inventory')
         }
            
        }).catch((err)=>{
            alert(err)
        })
        

    }

   

   
return(
        <div className='form'>
        <form onSubmit={addseed}>
            <div style={{textAlign:"center" }} >
                <label>Seed ID</label><br/>
                <input onChange={(e)=>{
                    setId(e.target.value);
                     let item=e.target.value;
                     
                    
                    if(item.substring(0,2) =='SE'){
                        setseedidErr(false)
                    }
                    else{
                        setseedidErr(true)
                    }
                    setStckMang(item)
                    }} id='id' type='text' name='id' ></input>
                    {seedidErr?<span style={{color:"red", fontSize: "12px" }}>Invalid Seed ID</span>:null}
            </div><br/>
             <div >
                <label>Seed Name</label><br/>
                <input onChange={(e)=>{
                   setseedName(e.target.value)
                   let item=e.target.value;
                    if(item.length<3){
                        setNameErr(true)
                    }
                    else{
                        setNameErr(false)
                    }
                    setseedName(item)
                    } } id='name'  type='text' name='name' ></input>
                    {nameErr?<span style={{color:"red", fontSize: "12px" }}>Invalid Seed Name</span>:null}
             </div><br/>
             <div>
                <label>Expiration Date</label><br/>
                <input onChange={(e)=>{
                    
                    setexpDate(e.target.value)
                    
                    }} id='expDate'  type='date' name='expDate' ></input>
            </div><br/>
           
             <div>
                <label>Packed Date</label><br/>
                <input onChange={(e)=>{
                    setpackedDate(e.target.value)
                    }} id='packedDate' type='date' name='packedDate' ></input>
            </div><br/>
             <div>
                <label>Storage Level</label><br/>
                <input onChange={(e)=>{
                    setstorageLevel(e.target.value)
                    }} id='storageLevel'  type='text' name='storageLevel' ></input>
                   
            </div><br/>
             <div>
                <label>Reorder Level</label><br/>
                <input onChange={(e)=>{
                    setreorderLevel(e.target.value)
                    }}  id='reorderLevel'  type='text' name='reorderLevel'></input>
            </div><br/>
             <div>
                <label>Latest Storage Date</label><br/>
                <input onChange={(e)=>{
                    setstoreDate(e.target.value)
                    }} id='storageDate'  type='date' name='storageDate' ></input>
            </div><br/>
             <div>
                <label>Stock Manager ID</label><br/>
                <input onChange={(e)=>{
                    setStckMang(e.target.value)
                    let item=e.target.value;
                     
                    
                    if(item.substring(0,2) =='SM'){
                        setidErr(false)
                    }
                    else{
                        setidErr(true)
                    }
                    setStckMang(item)
                    }} id='stckManager'  type='text' name='stckManager' ></input>
                    {idErr?<span style={{color:"red", fontSize: "12px" }}>Invalid Manager Id </span>:null}
            </div><br/>
             
            <div>
                <button style={{ fontSize: "15px",backgroundColor: "grey",color:"white"}}  type='submit'>Add Seed</button>
            </div>
         </form>
         
        </div>
       
    );
    }


export default Add;