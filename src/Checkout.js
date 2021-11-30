import React from 'react';
import './Checkout.css';
import ad from './Ad-banner.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <>
            <div className='checkout'>
                <div className='checkout__left'>
                    <img className='checkout__ad' alt='ad-banner' src={ad} />
                    <div className='products'>
                        <h2 className='checkout__info'>Shopping Cart</h2>
                        {
                            basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='checkout__right'>
                    <Subtotal />
                </div>
            </div>
        </>
    )
}

export default Checkout;