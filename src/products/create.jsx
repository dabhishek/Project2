import React, { Component } from 'react';

import firebase from 'firebase';

import base64 from 'image-to-base64';
import {DB_Config} from '../config';
const image2base64 = require('image-to-base64');



class Create extends Component {

    constructor(){
        super();
        if (!firebase.apps.length) {
            this.app = firebase.initializeApp(DB_Config);
        //    firebase.initializeApp({});
    
            this.database = this.app.database().ref().child('products');    
        }
    }
    componentDidMount(){

        // this.database.on("value",snap=>{
        //     this.state = {
        //         products:snap
        //     };
            
        //     console.log(this.state.products);
        // });

    }
    state={
        product_name:"",
        product_price:0,
        product_descrition:"",
        buyers:"",
        image:null,
        speed:10,
        products:[]
    };
    url = '';
    onSelectBuyer=(event)=>{
        //console.log(this.state.buyers.length);
        var arrStr = [];
        
        if(this.state.buyers==""){
         arrStr = this.state.buyers.split(',');
        }
        if(event.target.checked)
        {
            //console.log(event.target.value);
            //this.state.buyers+= event.target.value + ",";
           arrStr.push(event.target.value);
        }
        else{
 
            var deleteIt = arrStr.indexOf(event.target.value);
            //console.log(deleteIt);
            arrStr.splice(deleteIt,1);
        }
        this.state.buyers = arrStr.toString();
        console.log(this.state.buyers);
    }

    SaveProduct=(event)=>{
        //console.log(this.state);
        
      
        this.database.push({
            product_name:this.state.product_name,
            product_price:this.state.product_price,
            product_descrition:this.state.product_descrition,
            buyers:this.state.buyers,
            image:this.state.image,
        });

        alert("Data Saved!");
        
        
    }
    
    onSelectImage=(event)=>{
        console.log(event.target.files[0]);
        
        image2base64(URL.createObjectURL(event.target.files[0])).then((res)=>
        {
            this.state.image = res;
           // console.log(this.state.image);
        }).catch((error)=>{
            console.log(error);
        });
        //this.setState({image:event.target.files[0]});
    }

    render() {
        return (
            <div>
                
<div className="form-horizontal" method="post">
<fieldset>

<legend>Create PRODUCTS</legend>

<div className="form-group">
  <label className="col-md-4 control-label">Select Buyers</label>  
  <div className="col-md-4">
  <input id="buyer1" name="buyer1" onChange={this.onSelectBuyer} className="input-md" required="" type="checkbox" value="Jim"/> Jim &nbsp;&nbsp;&nbsp;
  <input id="buyer2" name="buyer2" onChange={this.onSelectBuyer}  className="input-md" required="" type="checkbox" value="Jill"/> Jill &nbsp;&nbsp;&nbsp;
  <input id="buyer3" name="buyer3" onChange={this.onSelectBuyer}  className="input-md" required="" type="checkbox" value="Jack"/> Jack &nbsp;&nbsp;&nbsp;
    
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >PRODUCT NAME</label>  
  <div className="col-md-4">
  <input id="product_name" value={this.state.product_name} onChange={e=>this.setState({product_name:e.target.value})} name="product_name" placeholder="PRODUCT NAME" className="form-control input-md" required="" type="text"/>
    
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label">PRODUCT DESCRIPTION</label>
  <div className="col-md-4">                     
    <textarea className="form-control" onChange={e=>this.setState({product_descrition:e.target.value})}  id="product_description" name="product_description" value={this.state.product_descrition}></textarea>
  </div>
</div>

<div className="form-group">
  <label className="col-md-4 control-label" >Price</label>  
  <div className="col-md-4">
  <input id="price" name="price" placeholder="Price" className="form-control input-md" required="" type="text"  value={this.state.product_price} onChange={e=>this.setState({product_price:e.target.value})} />
</div>
</div>    
<div className="form-group">
  <label className="col-md-4 control-label" >main_image</label>
  <div className="col-md-4">
    <input id="filebutton" name="filebutton" className="input-file" type="file"  onChange={this.onSelectImage}  />
  </div>
</div>

<div className="form-group">
  <div className="col-md-4">
    <button id="singlebutton" onClick={this.SaveProduct} name="singlebutton" className="btn btn-primary">Create</button>
  </div>
  </div>
</fieldset>
</div>

            </div>
        );
    }
}

export default Create;