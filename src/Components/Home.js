import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="backdrop" />

                <div className="home__row">
                    <Product
                        id={1}
                        title='The Lean Startup: How constant Innovation Creates Radically Succesful Businesses Paperback'
                        price={1499}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL.AC_SY400_.jpg"
                        rating={5}
                    />
                    <Product
                        id={2}
                        title="Amazon Echo (3rd Gen) 2021 Improved sound, powered by Dolby (Black)"
                        price={9749}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/7128HRanJgL._SL1100_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={3}
                        title="Fitbit Charge 3 Fitness Activity Tracker (Rose Gold and Blue Grey) with Offer on Accessory"
                        rating={3}
                        price={13999}
                        image="https://images-na.ssl-images-amazon.com/images/I/71ojyIZsF8L._SL1500_.jpg"
                    />
                    <Product
                        id={4}
                        title="Apple iPhone 11 (128GB) - RED"
                        price={72600}
                        image="https://images-na.ssl-images-amazon.com/images/I/5103Xi7yQgL._SL1024_.jpg"
                        rating={4}
                    />
                    <Product
                        id={5}
                        title="VEGA Pro Touch 1800-2000 Hair Dryer (VHDP-02), Black"
                        price={1899}
                        image="https://images-na.ssl-images-amazon.com/images/I/51tAVx2zElL._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={6}
                        title="Samsung 138 cm (55 Inches) 4K Ultra HD Smart QLED TV QA55Q60RAKXXL (Black) (2021 Model)"
                        price={83399.00}
                        image="https://images-na.ssl-images-amazon.com/images/I/918kUwIXQoL._SL1500_.jpg"
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
