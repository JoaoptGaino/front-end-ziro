import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import api from '../../services/api';
import CartItem, { Cart } from '../../components/CartItem';
function CartPage() {
    const history = useHistory();
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
    }, []);
    async function finishOrder(){
        await api.delete('cart')
        .then(()=>{
            alert('Carrinho finalizado com sucesso!');
            history.push('/');
        })
        .catch((err)=>{
            alert("Erro ao finalizar carrinho!");
            console.log(err);
        })
    }
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
                <div id="buttonsContainer">
                    <button id="finishOrder" onClick={() => finishOrder()}>
                        Finalizar carrinho
                </button>
                </div>
                {
                    cart.map((cart: Cart) => {
                        return <CartItem key={cart.id} cart={cart} />
                    })
                }
            </main>
        </div>
    )
}
export default CartPage;