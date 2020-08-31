import React from 'react';
import './styles.css';
import api from '../../services/api';


export interface Product{
    id:number;
    name:string;
    price:number;
    quantity:number;
}
interface ProductProps{
    product:Product;
}
const ProductItem:React.FC<ProductProps>=({product})=>{
    async function handleClick(id:number,price:number){
        let i = 1;
        await api.post('cart',{
            product_id:id,
            quantity:1,
            totalValue:price*i
        }).then(()=>{
            alert("Adicionado ao carrinho");
        }).catch((err)=>{
            alert("Não consegui adicionar ao carrinho");
            console.log(err);
        })

    }
    return (
        <article className="product-item">
            <header>
                <div>
                    <strong>{product.name}</strong>
                </div>
            </header>
            <footer>
                <p>
                    Preço: 
                    <strong>R$ {product.price}</strong>
                </p>
                <button onClick={()=>handleClick(product.id,product.price)}>
                    Adicionar ao carrinho
                </button>
            </footer>
        </article>
    );
}

export default ProductItem;