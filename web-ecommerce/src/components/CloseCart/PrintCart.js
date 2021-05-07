import React, { useState } from 'react';
import Loading from '../Loading';
import PropTypes from 'prop-types';

export default function PrintCart({ products }){
    const [ loadImage, setLoadImage ] = useState(false);

    return products.map((product, index)=>(
        <li key={index}>
            <div>
                <h3>{product.name}</h3>
            </div>
            <div>
                <section>
                    { !loadImage && <Loading isImage height='70%' />}
                    <img 
                        src={product.img.middle} 
                        onLoad={()=>setLoadImage(!loadImage)}
                        alt={`Imagem: ${ product.description }`}
                    />
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

PrintCart.propTypes = {
    products: PropTypes.bool
}