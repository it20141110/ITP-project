import React, { Component } from 'react';
import axios from 'axios';

class createBudget extends Component {

    constructor(props){
        super(props);
        this.state={
            IncomeID:"",
            IncomeActivity:"",
            PricePerKg:"",
            NetWeight:"",
            TotalIncome:"",
            OutcomeID:"",
            OutcomeActivity:"",
            Payment:"",
            TotalOutcome:""
            
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
    
        const {IncomeID, IncomeActivity,PricePerKg,NetWeight,TotalIncome,OutcomeID,OutcomeActivity,Payment,TotalOutcome} = this.state;
    
        const data ={
            IncomeID:IncomeID,
            IncomeActivity:IncomeActivity,
            PricePerKg:PricePerKg,
            NetWeight:NetWeight,
            TotalIncome:TotalIncome,
            OutcomeID:OutcomeID,
            OutcomeActivity:OutcomeActivity,
            Payment:Payment,
            TotalOutcome:TotalOutcome
        }
        console.log(data)

        axios.post("/cost/save", data).then((res) =>{
            if(res.data.success){
                this.setState({
                    IncomeID:"",
                    IncomeActivity:"",
                    PricePerKg:"",
                    NetWeight:"",
                    TotalIncome:"",
                    OutcomeID:"",
                    OutcomeActivity:"",
                    Payment:"",
                    TotalOutcome:""
                }) 
            }
        })
    }

    render() {
        return (
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 font-weight-normal">Add new Income and Expense</h1>
                <form className="needs-validation" noValidate>
                  <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>IncomeID</label>
                    <input type="text" className="form-control" name="IncomeID" placeholder="Enter Income ID" value={this.state.IncomeID} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Income Activity</label>
                    <input type="text" className="form-control" name="IncomeActivity" placeholder="Enter Income Activity" value={this.state.IncomeActivity} onChange={this.handleInputChange}/>
            </div>
            <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="PricePerKg" placeholder="Price Per 1kg" value={this.state.PricePerKg} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>
             <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Net weight(kg)</label>
                    <input type="text" className="form-control" name="NetWeight" placeholder="Enter Net weight(kg)" value={this.state.NetWeight} onChange={this.handleInputChange}/>
            </div>
             <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="TotalIncome" placeholder="Total income" value={this.state.TotalIncome} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>
             <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Outcome ID</label>
                    <input type="text" className="form-control" name="OutcomeID" placeholder="Enter Outcome ID" value={this.state.OutcomeID} onChange={this.handleInputChange}/>
            </div>
            <div className="form-group" style={{marginBottom:'15px'}}>
                    <label style={{marginBottom:'5px'}}>Outcome Activity</label>
                    <input type="text" className="form-control" name="OutcomeActivity" placeholder="Enter OutcomeActivity" value={this.state.OutcomeActivity} onChange={this.handleInputChange}/>
            </div>
            <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="Payment" placeholder="Amount of Outcome Payment" value={this.state.Payment} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>
             <div className="input-group mb-3" style={{marginBottom:'15px'}}>
                    <span className="input-group-text">Rs</span>
                    <input type="text" className="form-control" name="TotalOutcome" placeholder="Total outcome" value={this.state.TotalOutcome} onChange={this.handleInputChange} aria-label="Amount (to the nearest dollar)"/>
                    <span className="input-group-text">.00</span>
             </div>
             <button type="submit" className="btn btn-success" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                <i className="far fa-check-square"></i>
                &nbsp; Save 
            </button>
            &nbsp;
            <button className="btn btn-primary"> <a href="/budgetforecast" style={{textDecoration:'none', color:'white'}}> View Budget Forecast </a> </button>
     
            </form>
            </div>
        );
    }
}

export default createBudget;