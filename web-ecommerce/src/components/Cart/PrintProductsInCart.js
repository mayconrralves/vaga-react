import React from 'react';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

export default function  PrintProductsInCart ({ products, updateSub, updateSum, deleteProduct}) {
    return products.map((product,index)=>{
        return (
                <li key={index}>
                    <div>
                        <h3>
                            <span>{product.name}</span>
                            <span onClick={()=>deleteProduct(index)}>
                                <MdDelete />
                            </span>
                        </h3>
                    </div>
                    <div>
                        <section>
                            <img 
                                src={product.img.middle}
                                alt={`Imagem: ${ product.description }`}
                            />
                        </section>
                        <aside>
                            <p data-testid='brand'><strong>Marca:</strong> {product.brand}</p>
                            <p data-testid='description'><strong>Descrição:</strong>  {product.description}</p>
                            <p data-testid='price'><strong>Preço:</strong>  {product.price}</p>
                            <p data-testid='stock'><strong>Estoque: </strong> {product.quantity} </p>
                            <p data-testid='quantity-purchase'>
                                <strong>Quantidade: </strong> 
                                <span onClick={()=> updateSub(index)}>
                                    <FiMinusSquare data-testid='minus' />
                                </span>
                                <span>{product.quantityPurchase} </span>
                                <span onClick={()=> updateSum(index)}>
                                    <FiPlusSquare data-testid='sum'/>
                                </span>
                            </p>
                            <p>
                                <strong>
                                    Total: R$ {parseFloat(product.price) * product.quantityPurchase}
                                </strong>
                            </p>
                        </aside>
                    </div>
                </li>
            )
    });
}