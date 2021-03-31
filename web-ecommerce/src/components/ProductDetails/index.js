import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import { addProductInCart } from '../../store/modules/cart/actions';
import {Container } from './styles';

export default function ProductDetails(props) {
	const dispatch = useDispatch();
	const { products, success } = useSelector(state => state.products);
	const cart = useSelector(state=> state.cart);
	const {id} = useParams();
	const [ product, setProduct]  = useState(products.filter(product=> product.id === id)[0]);
	const [quantityPurchase, setQuantityPurchase] = useState(1);

	const saveProduct = quantityProduct => {
		if(quantityPurchase <=  quantityProduct ) {
			dispatch(addProductInCart({
				...product,
				quantityPurchase
			}));
			return true;
		}
		return false;
	}
	const purchaseProduct = event => {
		const productCurrent = cart.products.filter(product=>product.id===id);
		if( productCurrent.length){
			saveProduct(parseFloat(product.quantity) - productCurrent[0].quantityPurchase);
		}
		else {
			saveProduct(parseFloat(product.quantity));
		}
	}
	useEffect(()=>{
		if(!success) {
			dispatch(getProducts());
		} else {
			setProduct(products.filter(product=> product.id === id)[0]);
		}
	}, [success]);
	return product ? ( 
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
					<input 
						defaultValue={quantityPurchase}
						onChange={ e=>setQuantityPurchase(parseFloat(e.target.value)) } 
						name='quantity'
					/>
					<button 
						onClick={purchaseProduct}
					>
						Comprar
					</button>
				</div>
			</section>
		</Container>
		) : (
			<h1>Loading</h1>
		)
}