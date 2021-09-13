import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './NavBar';

export default class HomeSalary extends Component {

  constructor(props){
    super(props);

    this.state={
      posts:[]
    };
  }

componentDidMount(){
  this.retrievePosts();
}

//url
  retrievePosts(){
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
        console.log(this.state.posts)  
      }
    });
  }

  //delete the specific data
  onDelete = (id) =>{

    axios.delete(`/post/delete/${id}`).then((res) =>{
     var r =  (window.confirm('Are you sure to delete this record?'))
      if(r === true){
      alert("Deleted Successfully");
      this.retrievePosts();}
      
    })
  }

  filterData(posts,searchKey){
      //search according to the employeeID 
    const result = posts.filter((post) =>
    post.EmployeeID.toLowerCase().includes(searchKey)||
    post.EmployeeName.toLowerCase().includes(searchKey)||
    post.PayMethod.toLowerCase().includes(searchKey)
    )
    this.setState({posts:result}) 
  }

//to search data
  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;
 
    axios.get("/posts").then(res =>{
     if(res.data.success){
       this.filterData(res.data.existingPosts,searchKey)
     }
   });
 
   }

  render() {
    return (
  
      <div className="container">
        <NavBar/>
        <div className="row">
           <div className="col-lg-9 mt-2 mb-2">
             <h4> All Employees Salary Details </h4>
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
               <th scope="col">EmployeeID</th>
               <th scope="col">EmployeeName</th>
               <th scope="col">PayMethod</th>
               <th scope="col">NoOfDays</th>
               <th scope="col">RatePerDay</th>
               <th scope="col">OThrs</th>
               <th scope="col">OTperhr</th>
               <th scope="col">TotalOT</th>
               <th scope="col">NetSalary</th>
               <th scope="col">Action</th>
               </tr>
           </thead>
           <tbody>
             {this.state.posts.map((posts,index) =>( //to add data
               <tr key={index}>
                 <th scope="row">{index+1}</th>
                 <td>
                     <a href={`/post/${posts._id}`} style={{textDecoration:'none'}}> 
                     {posts.EmployeeID}
                     </a>
                     </td>
                 <td>{posts.EmployeeName}</td>
                 <td>{posts.PayMethod}</td>
                 <td>{posts.NoOfDays}</td>
                 <td>{posts.RatePerDay}</td>
                 <td>{posts.OThrs}</td>
                 <td>{posts.OTperhr}</td>
                 <td>{posts.TotalOT}</td>
                 <td>{posts.NetSalary}</td>
                 <td>
                   <a className="btn btn-warning" href={`/update/${posts._id}`}>
                     <i className="fas fa-edit"></i>&nbsp;Update
                   </a>
                   &nbsp;
                   <a className="btn btn-danger" href="#" onClick={() => this.onDelete(posts._id)}>
                     <i className="fas fa-trash"></i>&nbsp;Delete
                   </a>
                 </td>

               </tr>
             ))}
           </tbody>
         </table>
         <button className="btn btn-success"> <a href="/add" style={{textDecoration:'none', color:'white'}}> Add new Salary </a> </button>
      </div>
      
    );
  }
}
