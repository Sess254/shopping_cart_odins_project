import { memo } from 'react';
import { useCart } from '../context/Context';

const ProductCard = memo(({ item }) => {
    const { addToCart } = useCart();

    return (
        <div className='card'>
            <img src={item.image} alt={item.title} /> 
            <p>{item.title}</p>
            <p>${(item.price).toFixed(2)}</p>
            <button className='add-to-cart-btn' onClick={() => addToCart(item)}>Add to cart</button>
        </div>
    );
});

export default ProductCard;