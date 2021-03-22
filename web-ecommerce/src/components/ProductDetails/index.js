import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {Container } from './styles';

export default function ProductDetails() {
	const { products } = useSelector(state => state.products);
	const { id } = useParams();
	const [ product, _]  = useState(products.filter(product=> product.id === id)[0]);

	return (
		<Container>
			<img src={product.img} alt={product.description}/>
			<section>
				<div className='details-product'>
					<h3>{product.name}</h3>
					<p><b>Marca:</b> {product.brand}</p>
					<p><b>Descrição:</b>  {product.description}</p>
					<p><b>Quantidade: </b> {product.quantity}  unidades</p>
					<p><b>Preço:</b>  {product.price}</p>
				</div>
				<div className='buy-function'>
					<input defaultValue={1} name='quantity'/>
					<button>Comprar</button>
				</div>
			</section>
		</Container>
		) 
}