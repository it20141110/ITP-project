import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Adddeilery from './components/AddDelivers';
import AddConfOder from './components/AddConf';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Alldeliver from './components/Alldivers';
import Allconf from './components/AllConfs';
import UI from './components/UI';
import Inventory from './components/Inventory';
import Add from './components/Add';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path ="/add/confirm" exact component= {AddConfOder}/>
      <Route path ="/c/" exact component={Allconf}/>
      <Route path ="/" exact component={Alldeliver}/>
      <Route path ="/add" exact component= {Adddeilery}/>
      <Route path ="/UI" exact component= {UI}/>
      <Route path ="/inventory" exact component= {Inventory}/>
      <Route path="/add/seed" component={Add}/>

      <Footer/>
      </div>
</Router>
  );
}

export default App;
