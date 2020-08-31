import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import api from '../../services/api';
import CartItem, { Cart } from '../../components/CartItem';
function CartPage() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getCart() {
            await api.get('cart')
                .then(res => {
                    const cart = res.data;
                    setCart(cart);
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getCart();
    }, [])
    return (
        <div id="cart-page">

            <div id="header">
                <div>
                    <strong>
                        Seu carrinho
                    </strong>
                </div>
                <Link to="/">
                    <FaHome />
                </Link>
            </div>
            <main>
                {
                    cart.map((cart:Cart)=>{
                        return <CartItem key={cart.id} cart={cart} />
                    })
                }
            </main>
        </div>
    )
}
export default CartPage;