import { useCart } from "../context/Context";

function Cart() {
    const { cart, addToCart, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

    if (cart.length === 0) return <p>Your cart is empty</p>;

    return (
        <div className="cart">
            <h2>Cart ({totalItems})</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} width={50} />
                    <p>{item.title}</p>
                    <div className="qty-controls">
                        <button onClick={() => addToCart(item)}>+</button>
                        <span>{item.qty}</span>
                        <button onClick={() => removeFromCart(item.id)}>-</button>
                    </div>
                    <p>{item.price * item.qty}</p>
                </div>
            ))}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={clearCart}>Clear Cart</button>
            
        </div> 
    );
}

export default Cart;