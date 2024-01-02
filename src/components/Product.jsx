import React from "react";
import '../styles/Product.css';

function Product({id, title, subtitle, image, quantity, price, rating}) {
    return ( 
    <div>
        <div className="product">
            <div className="product_info">
                <span className="title">{title}</span>
                <span className="subtitle">{subtitle}</span>
                <span className="quantity">{quantity}</span>
                <div className="product_rating">{Array(rating).fill().map((_,i)=>(<p>&#9733; </p>))}</div>
                
                <span className="price">${price}</span>
                
            </div>
            <img src={image} alt="" />
            <button>Add to Basket</button>

        </div>
    </div> 
    );
}

export default Product;