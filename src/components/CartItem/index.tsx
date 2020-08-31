import React from 'react';
import './styles.css';
import api from '../../services/api';


export interface Cart{
    id:number;
    name:string;
    price:number;
    quantity:number;
}
interface CartItemProps{
    cart:Cart;
}
const CartItem:React.FC<CartItemProps>=({cart})=>{
    async function handleClick(id:number){
        await api.delete(`cart/${id}`)
        .then(()=>{
            alert("Excluido com sucesso");
            
        })
        .catch((err)=>{
            alert("Erro ao excluir do carrinho");
            console.log(err);
        })

    }
    return (
        <article className="product-item">
            <header>
                <div>
                    <strong>{cart.name}</strong>
                </div>
            </header>
            <footer>
                <p>
                    Preço: 
                    <strong>R$ {cart.price}</strong>
                </p>
                <button onClick={()=>handleClick(cart.id)}>
                    Remover do carrinho
                </button>
            </footer>
        </article>
    );
}

export default CartItem;