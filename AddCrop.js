import React,{Component, useState} from "react"
import axios from "axios"
import './seed.css';

function AddCrop(){
    const [id, setId] = useState("")
    const [name, setCropName] = useState("")
    const [storageLevel, setstorageLevel] = useState("")
    const [reorderLevel, setreorderLevel] = useState("")
    const [storageDate, setstoreDate] = useState("")
    const [stckManager, setStckMang] = useState("")
    const [productId, setProductId] = useState("")
    const [nameErr,setNameErr]=useState(false)
    const [idErr,setidErr]=useState(false)
    



    function addcrop(e){
        e.preventDefault();
        const newCrop={
           id,
           name,
           storageLevel,
           reorderLevel,
           storageDate,
           stckManager,
           productId

        }
        axios.post("http://localhost:8070/croproute/add",newCrop).then(()=>{
            alert("Crop Added Successfully!")
            
        }).catch((err)=>{
            alert(err)
        })

    }

    function ErrorHandler(e){
         if(name.length<3 || stckManager.charAt(0) !='E'){
             alert("Entered Invalid Data!!!")
         }
    }
return(
        <div className='form'>
        <form onSubmit={addcrop}>
            <div style={{textAlign:"center" }} >
                <label>Crop ID</label><br/>
                <input onChange={(e)=>{
                    setId(e.target.value);
                    }} id='id' type='text' name='id' ></input>
            </div><br/>
             <div >
                <label>Crop Name</label><br/>
                <input onChange={(e)=>{
                   setCropName(e.target.value)
                   let item=e.target.value;
                    if(item.length<3){
                        setNameErr(true)
                    }
                    else{
                        setNameErr(false)
                    }
                    setCropName(item)
                    } } id='name'  type='text' name='name' ></input>
                    {nameErr?<span style={{color:"red", fontSize: "12px" }}>Invalid Crop Name</span>:null}
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
                     
                    
                    if(item.charAt(0) =='E'){
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
                <label>Product ID</label><br/>
                <input onChange={(e)=>{
                   setProductId(e.target.value)
                    }} id='productId'  type='text' name='productId' ></input>
                   
            </div><br/>
             
            <div>
                <button style={{ fontSize: "15px",backgroundColor: "grey",color:"white"}} onClick={ErrorHandler} type='submit'>Add Crop</button>
            </div>
         </form>
        </div>
    );
    }


export default AddCrop;