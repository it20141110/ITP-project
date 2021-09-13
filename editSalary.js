import React, { Component } from 'react';
import axios from 'axios';

class editSalary extends Component {
    constructor(props){
        super(props);
        this.state={
                    EmployeeID:"",
                    EmployeeName:"",
                    PayMethod:"",
                    NoOfDays:"",
                    RatePerDay:"",
                    OThrs:"",
                    OTperhr:"",
                    TotalOT:"",
                    NetSalary:""
           }
        }
        
        handleInputChange = (e) =>{
            const {name,value} = e.target;
        
            this.setState({
                ...this.state,
                [name]:value
            })
        }
        
        onSubmit = (e) =>{
            
            e.preventDefault();
            const id =this.props.match.params.id;
        
            const {EmployeeID, EmployeeName,PayMethod,NoOfDays,RatePerDay,OThrs,OTperhr,TotalOT,NetSalary} = this.state;
        
            const data ={
                EmployeeID:EmployeeID,
                EmployeeName:EmployeeName,
                PayMethod:PayMethod,
                NoOfDays:NoOfDays,
                RatePerDay:RatePerDay,
                OThrs:OThrs,
                OTperhr:OTperhr,
                TotalOT:TotalOT,
                NetSalary:NetSalary
            }
        
            console.log(data)
        
            axios.put(`/post/update/${id}`, data).then((res) =>{
                if(res.data.success){
                    alert("Salary Updated Successfully")
                    this.setState({
                    EmployeeID:"",
                    EmployeeName:"",
                    PayMethod:"",
                    NoOfDays:"",
                    RatePerDay:"",
                    OThrs:"",
                    OTperhr:"",
                    TotalOT:"",
                    NetSalary:""
                    })
                }
            })
        }

    componentDidMount(){
        const id =this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    //when updating values are already filled after selecting the specific data
                    EmployeeID:res.data.post.EmployeeID,
                    EmployeeName:res.data.post.EmployeeName,
                    PayMethod:res.data.post.PayMethod,
                    NoOfDays:res.data.post.NoOfDays,
                    RatePerDay:res.data.post.RatePerDay,
                    OThrs:res.data.post.OThrs,
                    OTperhr:res.data.post.OTperhr,
                    TotalOT:res.data.post.TotalOT,
                    NetSalary:res.data.post.NetSalary

                });

                console.log(this.state.post);
            }
        });
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Update Salary</h1>
                <form className="needs-validation" noValidate>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>EmployeeID</label>
                    <input type="text" className="form-control" name="EmployeeID" placeholder="Enter Employee ID" value={this.state.EmployeeID} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Employee Name</label>
                    <input type="text" className="form-control" name="EmployeeName" placeholder="Enter Employee Name" value={this.state.EmployeeName} onChange={this.handleInputChange}/>
            </div>

            <div className="form-floating" style={{marginBottom:'15px'}}>
                 <select className="form-select" id="floatingSelect" required aria-label="Floating label select example" name="PayMethod" value={this.state.PayMethod} onChange={this.handleInputChange}>
                 <option selected>Select Pay Method</option>
                 <option value="1">Monthly</option>
                 <option value="2">Weekly</option>
                 </select>
                 <div class="invalid-feedback">Example invalid select feedback</div>
             </div>

             <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>No of Days</label>
                    <input type="text" className="form-control" name="NoOfDays" placeholder="Enter No of Days" value={this.state.NoOfDays} onChange={this.handleInputChange}/>
            </div>

            <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="RatePerDay" placeholder="Rate Per Day" value={this.state.RatePerDay} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>
             <div className="col-12">
                  <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <select className="form-select" id="inlineFormSelectPref" name="OThrs" value={this.state.OThrs} onChange={this.handleInputChange} >
                   <option selected>Select OT hours..</option>
                   <option value="3">0</option>
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="3">4</option>
                   <option value="3">5</option>
                  </select>
             </div>
             <br/>
        
             <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="OTperhr" placeholder="OT Rate per hour" value={this.state.OTperhr} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>

             <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="TotalOT" placeholder="TotalOT" value={this.state.TotalOT} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>

             <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="NetSalary" placeholder="Net Salary" value={this.state.NetSalary} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>

            <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Update
            </button>
            </form>
            </div>
        );
    }
}

export default editSalary;