import React from 'react';
import './styles.css';


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
    function handleClick(id:number){
        console.log(id);
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
                <button onClick={()=>handleClick(product.id)}>
                    Adicionar ao carrinho
                </button>
            </footer>
        </article>
    );
}

export default ProductItem;