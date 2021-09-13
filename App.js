import './App.css';
import Header from './componants/header';
import Footer from './componants/footer';
import Adddeilery from './componants/AddDelivers';
import AddConfOder from './componants/AddConf';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Alldeliver from './componants/Alldivers';
import Allconf from './componants/AllConfs';

function App() {
  return (
    <Router>
    <div>
      <Header/>
      <Route path ="/add/confirm" exact component= {AddConfOder}/>
      <Route path ="/c/" exact component={Allconf}/>
      <Route path ="/" exact component={Alldeliver}/>
      <Route path ="/add" exact component= {Adddeilery}/>

      <Footer/>
      </div>
</Router>
  );
}

export default App;
