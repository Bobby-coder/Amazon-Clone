import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeItem = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <>
            <div className='checkoutProduct'>
                <img src={image} className='checkoutProduct__img' alt='checkoutProduct__img' />
                <div className='checkoutProduct__info'>
                    <p className='checkouProduct__title'>{title}</p>
                    <p className='checkoutProduct__price'>
                        <small>रु</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='checkoutProduct__rating'>
                        {Array(rating).fill().map(() => {
                            return (
                                <p>⭐</p>
                            )
                        })}
                    </div>
                    <button onClick={removeItem}>Remove from Cart</button>
                </div>
            </div>
        </>
    )
}

export default CheckoutProduct;