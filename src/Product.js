import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

const Product = ({ id, title, image, price, rating }) => {

    const [{ basket }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <>
            <div className='product'>
                <div className='product__info'>
                    <p>{title}</p>
                    <p className='product__price'>
                        <small>रु</small>
                        <strong>{price}</strong>
                    </p>
                    <div className='product__rating'>
                        {Array(rating).fill().map((_, i) => {
                            return (
                                <p>⭐</p>
                            )
                        })}
                    </div>
                </div>
                <img className='product__image' src={image} alt='python-book' />
                <button onClick={addToCart} >Add to Cart</button>
            </div>
        </>
    )
}

export default Product;