import React, { Component } from 'react';
import axios from 'axios';

class budgetDetails extends Component {


    constructor(props){
        super(props);
        this.state={
          cost:{}
        };
    }

    componentDidMount(){
        const id =this.props.match.params.id;

        axios.get(`/cost/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    cost:res.data.cost
                });

                console.log(this.state.cost);
            }
        });
    }





    render() {
        const {IncomeID, IncomeActivity,PricePerKg,NetWeight,TotalIncome,OutcomeID,OutcomeActivity,Payment,TotalOutcome} = this.state.cost;
        return (
            <div style={{ marginTop: '20px' }}>
                <h4>{IncomeID}</h4>
            <hr/><dl className="row">
                    <dt className="col-sm-3">IncomeID</dt>
                    <dd className="col-sm-9">{IncomeID}</dd>

                    <dt className="col-sm-3">IncomeActivity</dt>
                    <dd className="col-sm-9">{IncomeActivity}</dd>

                    <dt className="col-sm-3">PricePerKg</dt>
                    <dd className="col-sm-9">{PricePerKg}</dd>

                    <dt className="col-sm-3">NetWeight</dt>
                    <dd className="col-sm-9">{NetWeight}</dd>

                    <dt className="col-sm-3">TotalIncome</dt>
                    <dd className="col-sm-9">{TotalIncome}</dd>

                    <dt className="col-sm-3">OutcomeID</dt>
                    <dd className="col-sm-9">{OutcomeID}</dd>

                    <dt className="col-sm-3">OutcomeActivity</dt>
                    <dd className="col-sm-9">{OutcomeActivity}</dd>

                    <dt className="col-sm-3">Payment</dt>
                    <dd className="col-sm-9">{Payment}</dd>

                    <dt className="col-sm-3">TotalOutcome</dt>
                    <dd className="col-sm-9">{TotalOutcome}</dd>
                </dl>
                
            </div> 
        );
    }
}

export default budgetDetails;