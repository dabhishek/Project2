import React, { Component } from 'react';

class Details extends Component {
   
    render() {
    
        return (
            <div>
                <div className="col-md-4">

<div className="product-grid">
            <div className="product-image">
                <a href="#">
                    {this.props.imagedata}
                    <img className="pic-1" src="data:image/jpeg;base64,{this.prop.imagedata}" width="200px"/>
                </a>
            </div>
            <div className="product-content">
                <h3 className="title"><a href="#">{this.props.product_name}</a></h3>
                <div className="price">$ {this.props.product_price}
                    
                </div>
                
            </div>
        </div>

</div>

            </div>
        );
    }
}

export default Details;