import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../services/api';
import ProductItem, { Product } from '../../components/Product';
import buyIcon from '../../assets/images/cart.svg';
import { Link } from 'react-router-dom';
function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            await api.get('products')
                .then(res => {
                    const product = res.data;
                    setProducts(product)
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getData();
    }, []);

    return (
        <div id="product-page">
            <div id="header">
                <div>
                    <strong>
                        Nossos produtos
                    </strong>
                </div>
            <Link to="/cart">
                <img src={buyIcon} alt=""/>
            </Link>
            </div>
            <main>
                {

                    products.map((product: Product) => {
                        return <ProductItem key={product.id} product={product} />
                    })
                }
            </main>
        </div>
    )
}
export default Products;