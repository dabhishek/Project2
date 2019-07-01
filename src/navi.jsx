import React, { Component } from 'react';


class Navi extends Component {
    render() {
        return (
            <div>
               <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Jim’s</a>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Create</a></li>
      <li><a href="#">About Us</a></li>
      <li><a href="#">Contact Us</a></li>*
    </ul>
  </div>
</nav>
            </div>
        );
    }
}

export default Navi;