import { Link } from "react-router-dom";

function Home(){
    return (
        <div className="home">
            <h1 className="home-heading">Welcome to the odin Store</h1>
            <p className="home-text">Browse our latest products</p>
            <Link to="/products">
                <button className="shop-btn">Shop Now</button>
            </Link>
        </div>
    );
}

export default Home;