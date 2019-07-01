import React, { Component } from 'react';

import firebase from 'firebase';

import base64 from 'image-to-base64';
import {DB_Config} from '../config';
import Details from './details';


const image2base64 = require('image-to-base64');

class List extends Component {

  constructor(){
    super();
    if (!firebase.apps.length) {
        this.app = firebase.initializeApp(DB_Config);
    //    firebase.initializeApp({});

        this.database = this.app.database().ref().child('/products');    
    }
}

state = {
  products:[],
  dis:[]
};
  componentDidMount(){
    var productList = [];
  this.database.once("value",snap=>{
            // this.state = {
            //     products:snap.toJSON()
            // };
            
            snap.forEach(function(childSnapshot){
              var item = childSnapshot.val();
              //console.log(item);
              item.key = childSnapshot.key;
              productList.push(item);
              
            });
            this.setState({
              products : productList
            });
            console.log(this.state.products);

            // this.state.products.forEach(element => {
            //   console.log(element);
            // });
          }).then(()=>{

            var display = [];
            //console.log("hi");
            this.state.products.forEach(element => {
              display.push( <Details product_name={element.product_name} product_price={element.product_price} imagedata={element.image}/>);
            });
            this.setState({
              dis : display
            }); 
          });

  }
    render() {
        return (
            <div>
                <div className="container">
  <div className="row">
    {this.state.dis}
    <div className="col-md-4">
      One of three columns
    </div>
    <div className="col-md-4">
      One of three columns
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default List;