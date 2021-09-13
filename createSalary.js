import React, { Component } from 'react';
import axios from 'axios';

class createSalary extends Component {


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
//if change any values in the frontend this method identify that changer and define that value
        handleInputChange = (e) =>{
            const {name,value} = e.target;
        
            this.setState({
                ...this.state,
                [name]:value
            })
        }

    //onSubmit method to save the data in the form
    onSubmit = (e) =>{
        e.preventDefault();
    
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

        axios.post("/post/save", data).then((res) =>{
            if(res.data.success){
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

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add new Salary</h1>
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
                    <input type="text" className="form-control" id="NoOfDays" name="NoOfDays" placeholder="Enter No of Days" value={this.state.NoOfDays} onChange={this.handleInputChange}/>
            </div>

            <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                 <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <select className="form-select" id="inlineFormSelectPref" name="RatePerDay" placeholder="Rate Per Day" value={this.state.RatePerDay} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)">
                   <option selected>Select Rate Per day..</option>
                   <option value="1">500</option>
                   <option value="2">800</option>
                  </select>
                    <span className="input-group-text">.00</span>
             </div>
             <div className="col-12">
                  <label className="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <select className="form-select" id="inlineFormSelectPref" name="OThrs" value={this.state.OThrs} onChange={this.handleInputChange} >
                   <option selected>Select OT hours..</option>
                   <option value="1">0</option>
                   <option value="2">1</option>
                   <option value="3">2</option>
                   <option value="4">3</option>
                   <option value="5">4</option>
                   <option value="6">5</option>
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
                &nbsp; Save 
            </button>
            </form>
            </div>
        );
    }
}

export default createSalary;