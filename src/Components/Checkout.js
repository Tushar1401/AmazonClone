import React from 'react'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="ad"
                />

                <div>
                    <h2 className="checkout__title">Your shopping Basket is empty</h2>
                    {/* <p>
                        You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                    </p> */}

                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                    {/* Basket Item */}
                </div>
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
