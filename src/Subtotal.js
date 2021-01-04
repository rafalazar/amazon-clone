import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();

    const totalPrice = () => {
        for(let i=0; i<basket.length;i++){
            basket.price = 0 + basket[i].price
        }

        return basket.price;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{totalPrice}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
