import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    // const [{ basket }] = useStateValue();
    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="ad"
                />

                <div>
                    {/* <h3>Hello, {user && user.email}</h3> */}
                    <h3>Hello, {user ? user.email.substring(0,7) : 'Guest'}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/*  List out all of the checkout products */}
                    {basket.map(item => {
                        // console.log(item);
                        return (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                    })}

                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
