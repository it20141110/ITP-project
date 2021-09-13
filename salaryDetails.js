import React, { Component } from 'react';
import axios from 'axios';

class salaryDetails extends Component {

    constructor(props){
        super(props);
        this.state={
          post:{}
        };
    }

    componentDidMount(){
        const id =this.props.match.params.id;

        axios.get(`/post/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    post:res.data.post
                });

                console.log(this.state.post);
            }
        });
    }



    render() {
        const {EmployeeID, EmployeeName,PayMethod,NoOfDays,RatePerDay,OThrs,OTperhr,TotalOT,NetSalary} = this.state.post;
        return (
            <div style={{ marginTop: '20px' }}>
                <h4>{EmployeeID}</h4>
            <hr/><dl className="row">
                    <dt className="col-sm-3">EmployeeID</dt>
                    <dd className="col-sm-9">{EmployeeID}</dd>

                    <dt className="col-sm-3">EmployeeName</dt>
                    <dd className="col-sm-9">{EmployeeName}</dd>

                    <dt className="col-sm-3">PayMethod</dt>
                    <dd className="col-sm-9">{PayMethod}</dd>

                    <dt className="col-sm-3">NoOfDays</dt>
                    <dd className="col-sm-9">{NoOfDays}</dd>

                    <dt className="col-sm-3">RatePerDay</dt>
                    <dd className="col-sm-9">{RatePerDay}</dd>

                    <dt className="col-sm-3">OThrs</dt>
                    <dd className="col-sm-9">{OThrs}</dd>

                    <dt className="col-sm-3">OTperhr</dt>
                    <dd className="col-sm-9">{OTperhr}</dd>

                    <dt className="col-sm-3">TotalOT</dt>
                    <dd className="col-sm-9">{TotalOT}</dd>

                    <dt className="col-sm-3">NetSalary</dt>
                    <dd className="col-sm-9">{NetSalary}</dd>
                </dl>
                
            </div> 
        );
    }
}

export default salaryDetails;