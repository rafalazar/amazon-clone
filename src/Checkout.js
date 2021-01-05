import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct.js';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal.js';

const Checkout = () => {

    const [{basket}, dispatch] = useStateValue();

    return(
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/PayCode/Spanish/Desktop/AmazonExports_FIAT_OnSite_Concepts_R5_Spanish_Generic_DesktopStripe_1500x120_v1.png" alt="Amazon Ad"/>

                <div>
                    <h2 className="checkout__title">Your Shopping Bag</h2>
                    
                    {basket.map(item => {
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    })}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                
            </div>
        </div>
    );
}

export default Checkout;