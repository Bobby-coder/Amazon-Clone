import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from "./reducer";

const Subtotal = () => {

    const [{ basket }, dispatch] = useStateValue();

    return (

        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <div>
                            <strong>Subtotal ({basket?.length} items):{value}</strong>
                        </div>
                        <small className='subtotal__gift'>
                            <input type='checkbox' classNamen='gift__input' /> This order contains a gift
                        </small>
                        <button>Proceed to checkout</button>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"रु"}
            />

        </div>

    )
}

export default Subtotal;