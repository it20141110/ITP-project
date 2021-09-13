import React from 'react';
import {BrowserRouter as Router,Route,Link,NavLink,Switch,useHistory} from 'react-router-dom';
import Inventory from './components/Inventory';
import UI from './components/UI';
import Header from './components/Header';
import Add from './components/Add';
import PlantInventory from './components/PlantInventory';
import AddPlant from './components/AddPlant';
import AddCrop from './components/AddCrop';
import CropInventory  from './components/CropInventory';
import AddEquip from './components/AddEquip';
import EquipInventory  from './components/EquipInventory';
import AddFert from './components/AddFert';
import FertInventory  from './components/FertInventory';
import AddOther from './components/AddOther';
import OtherInventory  from './components/OtherInventory';
import Footer from './components/Footer'


function App(){
  
  return (
    <div>
    
    
   
     <Router >
       <Header/>
  
       <Switch>
          <Route exact  path="/UI" component={UI}/>
           <Route path="/inventory" component={Inventory}/>
          <Route path="/add" component={Add}/>
           <Route path="/addplant" component={AddPlant}/>
           <Route path="/addcrop" component={AddCrop}/>
           <Route path="/addequip" component={AddEquip}/>
           <Route path="/addfert" component={AddFert}/>
           <Route path="/addother" component={AddOther}/>
          <Route path="/otherinventory" component={OtherInventory}/>
          <Route path="/fertinventory" component={FertInventory}/>
          <Route path="/equipinventory" component={EquipInventory}/>
          <Route path="/plantinventory" component={PlantInventory}/>
          <Route path="/cropinventory" component={CropInventory}/>

          

         
       </Switch>
   
    </Router>
    <Footer/>
    </div>
  );

}

export default App;
