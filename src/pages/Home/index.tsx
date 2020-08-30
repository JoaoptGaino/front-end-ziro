import React, { useState, useEffect } from 'react';
import './styles.css';
import buyIcon from '../../assets/images/cart.svg';
import landingImg from '../../assets/images/logo-blog.png';

import { Link } from 'react-router-dom';
import api from '../../services/api';


function Home(){
    const [totalProducts,setTotalProducts] = useState(0);
    useEffect(()=>{
        api.get('productsCount')
        .then(res=>{
            const {total} = res.data;
            setTotalProducts(total);
        })
    })
    return(
        <div id="home-page">
            <div id="home-page-content" className="container">
                <div className="logo-container">
                    <h2>Gostaria de fazer algumas compras?</h2>
                </div>
                <img src={landingImg} className="landing-image" alt="Landing"/>
                <div className="button-container">
                    <Link to="/products" className="products">
                        <img src={buyIcon} alt="Buy"/>
                        Comprar
                    </Link>
                </div>
                <span className="total-products">
                    Total de {totalProducts} produtos disponíveis para você comprar.
                </span>
            </div>
        </div>
    )
}
export default Home;