import { Link } from "react-router-dom";
import { useCart } from "../context/Context";

export default function Navbar() {
    const { totalItems } = useCart();

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Our Products</Link>
            <Link to="/cart">Cart ({ totalItems })</Link>
        </nav>
    );

}