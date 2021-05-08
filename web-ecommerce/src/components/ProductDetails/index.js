import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import { addProductInCart } from '../../store/modules/cart/actions';
import Loading from '../Loading';
import {Container } from './styles';

export default function ProductDetails() {
	const dispatch = useDispatch();
	const { products, success } = useSelector(state => state.products);
	const cart = useSelector(state=> state.cart);
	const { id } = useParams();
	const [ product, setProduct]  = useState(products.filter(product=> product.id === id)[0]);
	const [quantityPurchase, setQuantityPurchase] = useState(1);
	const [loadingImage, setLoadingImage] = useState(false);
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
	const purchaseProduct = () => {
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
		<Container  productQuantity={product.quantity} >
			<section>
				{ !loadingImage && <Loading isImage height='60%' /> }
				<img 
					src={product.img.large} 
					srcSet={`${product.img.middle} 900w,  ${product.img.large} 1280w`}
					alt={product.description}
					onLoad={()=>setLoadingImage(true)}
				/>
			</section>
			<aside>
					<h3>{product.name}</h3>
					<div className='details'>
						<p><strong>Marca:</strong> {product.brand}</p>
						<p><strong>Descrição:</strong>  {product.description}</p>
						<p><strong>Quantidade: </strong> {product.quantity}  unidades</p>
						<p><strong>Preço:</strong>  {product.price}</p>
					</div>
				
				{
					product.quantity ? (
						<div className='buy-function'>
							<input 
								defaultValue={1}
								onChange={ e=>setQuantityPurchase(parseFloat(e.target.value)) } 
								name='quantity'
							/>
							<button 
								onClick={purchaseProduct}
							>
								Comprar
							</button>
						</div>
					) : (
						<div className='buy-function'>
							<strong>Produto indisponível</strong>
						</div>
					)
				}
			</aside>
		</Container >
		) : (
			<Loading width='40%' height='40%' />
		)
}