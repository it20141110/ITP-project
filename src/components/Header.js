import React, { Component } from 'react';
import './Header.css';


export class Header extends Component {
  

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src='/images/logo.jpeg' width="250" height="100" alt="acc" />
                    <h1> GoviSaviya Agricultural Farm </h1>
                    </div>
                  
                   
             </div>
        );
    }
}


export default Header;

