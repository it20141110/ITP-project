import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return(
    <nav className="navbar navbar-light bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" area-current="page" href="/">
      <img src='images/Salary.jpg' alt="" width="20" height="20" className="d-inline-block align-text-top"/>
      <b>Employees Salary</b>
     </a>
     <a className="navbar-brand" area-current="page" href="/i">
      <img src={process.env.PUBLIC_URL + "images/income-expense.jpg"} alt="" width="40" height="30" className="d-inline-block align-text-top"/>
      <b>View Income and Expenses</b>
     </a>
  </div>
</nav>
)
    }
}

export default NavBar;