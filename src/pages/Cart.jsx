import { useCart } from "../context/Context";

function Cart() {
    const { cart, addToCart, removeFromCart, totalItems, totalPrice, clearCart } = useCart();

    if (cart.length === 0) return <p className="cart-message">Your cart is empty</p>;

    return (
        <div>
            <div>
                <div className="cart-total">
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                    <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                </div> 
                <div className="cart">
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} width={50} />
                            <p>{item.title}</p>
                            <div className="qty-controls">
                                <button className="increment-btn" onClick={() => addToCart(item)}>+</button>
                                <span>{item.qty}</span>
                                <button className="decrement-btn" onClick={() => removeFromCart(item.id)}>-</button>
                            </div>
                            <p>${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Cart;