import React from 'react';
import './seed.css';
import {BrowserRouter as Router,Route,Link,NavLink,Switch} from 'react-router-dom';



function UI(){
    
   
   return (
    <div >
    <div className="bg">
    <button className="button"> <NavLink style={{color:"black" }} exact activeClassName="active" to="/inventory">Seed Inventory</NavLink></button><br/>
    <button className="button"> <NavLink style={{color:"black" }} exact activeClassName="active" to="/plantinventory">Plant Inventory</NavLink></button><br/>
    <button className="button"> <NavLink  style={{color:"black" }} exact activeClassName="active" to="/cropinventory">Cultivated Crop Inventory</NavLink></button><br/>
    <button className="button"> <NavLink style={{color:"black" }} exact activeClassName="active" to="/equipinventory">Equipment Inventory</NavLink></button><br/>
    <button className="button"> <NavLink  style={{color:"black" }} exact activeClassName="active" to="/fertinventory">Fertilizer Production Inventory</NavLink></button><br/>
    <button className="button"> <NavLink style={{color:"black" }} exact activeClassName="active" to="/otherinventory">Other Product Inventory(Sales)</NavLink></button><br/>
    <button className="reportbtn"> <NavLink className="reporttxt" exact activeClassName="active" to="/">Generate Report</NavLink></button><br/>
    </div>
    </div>

   );
}
export default UI
