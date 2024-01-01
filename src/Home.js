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
                    <Product 
                    id="1122338"
                    title="Fireball"
                    subtitle="Cinnamon Flavoured Whiskey"
                    price={84.99}
                    rating={5}
                    quantity="1.14L"
                    image="https://media.danmurphys.com.au/dmo/product/294644-1.png?impolicy=PROD_MD" />
                    
                    
                    <Product 
                    id="1122334"
                    title="PepperJack Barossa Shiraz"
                    subtitle="Shiraz Red Wine"
                    price={43.99}
                    rating={4}
                    quantity="1L"
                    image="https://media.danmurphys.com.au/dmo/product/144469-1.png?impolicy=PROD_MD"/>
                    
                    <Product 
                    id="1122335"
                    title="Jim Beam"
                    subtitle="Bourbon Whiskey"
                    price={49.50}
                    rating={5}
                    quantity="1L"
                    image="https://media.danmurphys.com.au/dmo/product/335009-1.png?impolicy=PROD_MD" />
                    
                    
                </div>
                <h1 className='heading_1'>Drinks of the Day</h1>
                <div className="home_row">
                    <Product 
                    id="1122339"
                    title="White Claw"
                    subtitle="Premium Vodka"
                    quantity="700mL"
                    price={61.99}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/387003-1.png?impolicy=PROD_MD" />

                    <Product 
                    id="1122336"
                    title="Roku"
                    subtitle="Japanese Craft Gin"
                    quantity="700mL"
                    price={61.99}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/697326-1.png?impolicy=PROD_MD" />

                    <Product
                    id="1122346"
                    title="Reyka"
                    subtitle="Vodka"
                    quantity="700mL"
                    price={68.99}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/642071-1.png?impolicy=PROD_MD" />

                    <Product
                    id="1122341"
                    title="el Jimador"
                    subtitle="Reposado Tequila"
                    quantity="700mL"
                    price={67.99}
                    rating={3}
                    image="https://media.danmurphys.com.au/dmo/product/348013-1.png?impolicy=PROD_MD" />

                </div>
                <img src="https://i.imgur.com/ov2jxvR.png" alt="" className="home_pg_img" />

                <h1 className='heading_1'>Feeling Tipsy?</h1>
                <div className="home_row">  
                <Product 
                    id="1122351"
                    title="Asahi"
                    subtitle="Super Dry Bottles"
                    quantity="330mL (24 Pack)"
                    price={56.99}
                    rating={4}
                    image="https://media.danmurphys.com.au/dmo/product/98903-1.png?impolicy=PROD_MD" />

                    <Product 
                    id="1122352"
                    title="Heineken"
                    subtitle="Lager Bottles"
                    quantity="330mL (24 Pack)"
                    price={48.90}
                    rating={4}
                    image="https://media.danmurphys.com.au/dmo/product/47988-1.png?impolicy=PROD_MD" />

                    <Product 
                    id="1122353"
                    title="Great Northern Brewing Co."
                    subtitle="Super Crisp Lager Bottles"
                    quantity="330mL (24 Pack)"
                    price={45.95}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/839496-1.png?impolicy=PROD_MD" />
                    
                </div>
                <h1 className='heading_1'>Party Hard?</h1>
                <div className="home_row">
                    <Product
                    id="1122342"
                    title="Suntory"
                    subtitle="-196 Lemon 10 Pack Cans"
                    quantity="330mL (10 Pack)"
                    price={42.95}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/172366-1.png?impolicy=PROD_MD" />
                    
                    <Product 
                    id="1122343"
                    title="Vodka Cruiser"
                    subtitle="Pre Mixed Vodka"
                    quantity="275mL (10 Pack)"
                    price={33}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/742207-1.png?impolicy=PROD_MD" />
                    
                    <Product 
                    id="1122344"
                    title="Jack Daniel's"
                    subtitle="Tenesse Whiskey & Cola"
                    quantity="375mL (10 Pack)"
                    price={46.95}
                    rating={5}
                    image="https://media.danmurphys.com.au/dmo/product/916424-1.png?impolicy=PROD_MD" />
                    
                    <Product 
                    id="1122345"
                    title="Gordon's"
                    subtitle="Pink Gin & Soda Bottles"
                    quantity="330mL (4 Pack)"
                    price={19}
                    rating={4}
                    image="https://media.danmurphys.com.au/dmo/product/762765-1.png?impolicy=PROD_MD" />
                </div>

            </div>
        </div>
    </div>
    );
}

export default Home;