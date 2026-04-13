import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav className="nav">
            <Link className="link home-btn" to="/">Home</Link>
            <Link className="link products-btn" to="/products">Products</Link>
            <Link className="link cart-btn" to="/cart">Cart({ totalItems })</Link>
        </nav>
    );

}