import { useState, useEffect, use } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        async function fetchProducts(){
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                if (!res.ok) throw new Error('Network response was not ok');
                const data = await res.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        } 

        fetchProducts();
    }, []);


    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error: {error}</p>

    return (
        <div className="container">
            {products.map((item) (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
}