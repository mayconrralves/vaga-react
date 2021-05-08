import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../Loading';


export default function ListProducts ( { products, isList } ) {
    const [loadImage, setLoadImage] = useState(false);

    return products.map(product=>(
        
        <li key={product.id} >
            <Link to={'/details/'+ product.id}>
                { !loadImage && <Loading height='70%' isImage /> }
                <img 
                    onLoad={() => setLoadImage(true)}
                    src={product.img.middle} 
                    alt={"imagem de"+ product.description}
                />
                <div className="details">
                    <h3>{product.name}</h3>
                    { isList && (
                        <>
                            <p><strong>Marca:</strong> {product.brand}</p>
                            <p><strong>Descrição:</strong>  {product.description}</p>
                            <p><strong>Quantidade: </strong> {product.quantity}  unidades</p>
                        </>
                    )}
                    <p> R$ {product.price}</p>
                </div>
            </Link>
        </li>
     ));
 }


ListProducts.propTypes = {
    products : PropTypes.array.isRequired,
    isList : PropTypes.bool.isRequired,
}