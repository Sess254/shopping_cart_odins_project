import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <h1>Welcome to the odin Store</h1>
            <P>Browse our latest products</P>
            <Link to="/products">
                <button>Shop Now</button>
            </Link>
        </div>
    );
}