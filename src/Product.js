import React from "react";
import './Product.css';

function Product(props) {
    return ( 
    <div>
        <div className="product">
            <div className="product_info">
                <span className="title">{props.title}</span>
                <span className="subtitle">{props.subtitle}</span>
                <span className="quantity">{props.quantity}</span>
                <div className="product_rating">{Array(props.rating).fill().map((_,i)=>(<p>&#9733; </p>))}</div>
                <br/>
                <span className="price">${props.price}</span>
                
            </div>
            <img src={props.image} alt="" />
            <button>Add to Basket</button>

        </div>
    </div> 
    );
}

export default Product;