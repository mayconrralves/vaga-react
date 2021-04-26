import React from 'react';

export default function printCart({ products }){
    return products.map((product, index)=>(
        <li key={index}>
            <div>
                <h3>{product.name}</h3>
            </div>
            <div>
                <section>
                    <img src={product.img.middle}/>
                </section>
                <aside>
                    <p><strong>Nome: </strong>{product.description}</p>
                    <p><strong>Preço: </strong> R$ {product.price}</p>
                    <p><strong>Quantidade: </strong>{product.quantityPurchase}</p>
                    <p>
                        <strong>Total: </strong> 
                        R$ {parseFloat(product.price) * parseInt(product.quantityPurchase)}
                    </p>
                </aside>
            </div>
        </li>
    ))
}