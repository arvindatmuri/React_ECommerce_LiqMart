import React from "react";
import './Product.css';

function Product() {
    return ( 
    <div>
        <div className="product">
            <div className="product_info">
                <p>PepperJack Barossa Shiraz</p>
                <p className="price">$43.99</p>
                <div className="product_rating"> &#9733; &#9733; &#9733; &#9733;</div>
            </div>
            <img src="https://media.danmurphys.com.au/dmo/product/144469-1.png?impolicy=PROD_SM" alt="" />


        </div>
    </div> 
    );
}

export default Product;