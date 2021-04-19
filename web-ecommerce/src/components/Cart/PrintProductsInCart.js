import React from 'react';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function  PrintProductsInCart ({ products, updateSub, updateSum, deleteProduct}) {
    return products.map((product,index)=>{
        return (
                <li key={index}>
                    <section className='title'>
                        <h3><span>{product.name}</span><span onClick={()=>deleteProduct(index)}><MdDelete /></span></h3>
                    </section>
                    <section>
                        <img src={product.img.middle}/>
                        <div>
                            <p><strong>Marca:</strong> {product.brand}</p>
                            <p><strong>Descrição:</strong>  {product.description}</p>
                            <p><strong>Preço:</strong>  {product.price}</p>
                            <p><strong>Estoque: </strong> {product.quantity} </p>
                            <p>
                                <strong>Quantidade: </strong> 
                                <span onClick={()=> updateSub(index)}>
                                    <FiMinusSquare />
                                </span>
                                {product.quantityPurchase} 
                                <span onClick={()=> updateSum(index)}>
                                    <FiPlusSquare />
                                </span>
                            </p>
                            <p>
                                <strong>
                                    Total: R$ {parseFloat(product.price) * product.quantityPurchase}
                                </strong>
                            </p>
                        </div>
                    </section>
                </li>
            )
    });
}