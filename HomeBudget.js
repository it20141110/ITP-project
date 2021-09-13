import React, { Component } from 'react';
import axios from 'axios';

export default class HomeBudget extends Component {
  constructor(props){
    super(props);

    this.state={
      costs:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

//url
  retrievePosts(){
    axios.get("/costs").then(res =>{
      if(res.data.success){
        this.setState({
          costs:res.data.existingPosts
        });
        console.log(this.state.costs)  
      }
    });
  }

  //delete the specific data
  onDelete = (id) =>{

    axios.delete(`/cost/delete/${id}`).then((res) =>{
     var r =  (window.confirm('Are you sure to delete this record?'))
      if(r === true){
      alert("Deleted Successfully");
      this.retrievePosts();}
      
    })
  }

  filterData(costs,searchKey){
      //search according to the employeeID 
    const result = costs.filter((cost) =>
    cost.IncomeID.toLowerCase().includes(searchKey)||
    cost.IncomeActivity.toLowerCase().includes(searchKey)||
    cost.OutcomeID.toLowerCase().includes(searchKey)
    )
    this.setState({costs:result}) 
  }

//to search data
  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
 
    axios.get("/costs").then(res =>{
     if(res.data.success){
       this.filterData(res.data.existingPosts,searchKey)
     }
   });
 
   }

  render() {
    return (
  
      <div className="container">
        <div className="row">
           <div className="col-lg-9 mt-2 mb-2">
             <h4> All Income and Outcome details </h4>
           </div>
           <div className="col=lg-3 mt-2 mb-2">
             <input
             className="form-control"
             type="search"
             placeholder="Search"
             name="searchQuery"
             onChange={this.handleSearchArea}> 

             </input>
           </div>
         </div>
        <table className="table">
           <thead>
             <tr>
               <th scope="col">#</th>
               <th scope="col">IncomeID</th>
               <th scope="col">IncomeActivity</th>
               <th scope="col">PricePerKg</th>
               <th scope="col">NetWeight</th>
               <th scope="col">TotalIncome</th>
               <th scope="col">OutcomeID</th>
               <th scope="col">OutcomeActivity</th>
               <th scope="col">Payment</th>
               <th scope="col">TotalOutcome</th>
               <th scope="col">Action</th>
               </tr>
           </thead>
           <tbody>
             {this.state.costs.map((costs,index) =>( //to add data
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/cost/${costs._id}`} style={{textDecoration:'none'}}> 
                     {costs.IncomeID}
                     </a>
                     </td>
                 <td>{costs.IncomeActivity}</td>
                 <td>{costs.PricePerKg}</td>
                 <td>{costs.NetWeight}</td>
                 <td>{costs.TotalIncome}</td>
                 <td>{costs.OutcomeID}</td>
                 <td>{costs.OutcomeActivity}</td>
                 <td>{costs.Payment}</td>
                 <td>{costs.TotalOutcome}</td>
                 <td>
                   <a className="btn btn-warning" href={`/updateC/${costs._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Update
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() => this.onDelete(costs._id)}>
                     <i className="fas fa-trash"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}
           </tbody>
         </table>
         <button className="btn btn-success"> <a href="/addCosts" style={{textDecoration:'none', color:'white'}}> Add new Income and Outcome </a> </button>
         &nbsp;
         <button className="btn btn-primary"> <a href="/budgetforecast" style={{textDecoration:'none', color:'white'}}> View Budget Forecast </a> </button>
      </div>
      
    );
  }
}

