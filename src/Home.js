import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
    <div>
        <div className="home_page">
            <div className="home_container">

                <img src="https://i.imgur.com/2imY4B7.png" alt="" className="home_pg_img" />
                <h1 className='heading_1'>New at LiqMart</h1>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <h1 className='heading_1'>Drinks of the Day</h1>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <img src="https://i.imgur.com/ov2jxvR.png" alt="" className="home_pg_img" />

                <h1 className='heading_1'>Feeling Tipsy?</h1>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                    
                </div>
                <h1 className='heading_1'>Party Hard?</h1>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>

            </div>
        </div>
    </div>
    );
}

export default Home;