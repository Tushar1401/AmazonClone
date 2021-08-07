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
                        title='The Lean Startup: How constant Innovation Creates Radically Successful Businesses Paperback'
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
                        title={`Sasmsung 49" Odyssey Super Ultra Wide QLED Gaming Monitor - 240Hz`}
                        price={178999}
                        image="https://m.media-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={7}
                        title="Canon PIXMA G2020 NV All-in-One Ink Tank Colour Printer (Navy Blue)"
                        rating={4}
                        price={11699}
                        image="https://m.media-amazon.com/images/I/71clMBKpV0L._SL1500_.jpg"
                    />
                    <Product
                        id={8}
                        title="Samsung Galaxy Watch (Bluetooth + LTE, 46 mm) - Silver"
                        price={15990}
                        image="https://m.media-amazon.com/images/I/71oNPZKNTfL._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={9}
                        title="Philips BT3221/15 corded & cordless Titanium blade Beard Trimmer - 20 length settings; 90 min run time"
                        price={1899}
                        image="https://m.media-amazon.com/images/I/617WV3K81EL._SL1500_.jpg"
                        rating={4}
                    />
                    <Product
                        id={10}
                        title="Titan Contemporary Wall Clock with Spiral Patterned Dial - 32.5 cm x 32.5 cm x 5.5 cm"
                        price={2295}
                        image="https://m.media-amazon.com/images/I/71ElVZfvb4S._SL1500_.jpg"
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={11}
                        title="LG 32 L Convection Microwave Oven (MC3286BRUM, Black, With Starter Kit)"
                        rating={3}
                        price={17782}
                        image="https://m.media-amazon.com/images/I/91fSgD70z0L._SL1500_.jpg"
                    />
                    <Product
                        id={12}
                        title="IFB Neptune FX Fully Electronic Dishwasher (12 Place Settings, White, Tough stain removal, Hygiene quick wash, Super Energy Efficiency with Adjustable Upper Basket)"
                        price={33440}
                        image="https://m.media-amazon.com/images/I/71PwfI7jE7L._SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={13}
                        title="Sony Bravia 139 cm (55 inches) 4K Ultra HD Smart LED Google TV KD-55X80AJ (Black) (2021 Model) | with Alexa"
                        rating={4}
                        price={78990}
                        image="https://m.media-amazon.com/images/I/81t9bFDmxBS._SL1500_.jpg"
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
