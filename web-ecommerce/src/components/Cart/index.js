import React from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
export default function Cart(){
	const { products } = useSelector(state=>state.cart);
	const printProductsInCart = () => {
		return products.map((product,index)=>{
			return (
					<li key={index}>
						<h3>{product.name}</h3>
						<p><strong>Marca:</strong> {product.brand}</p>
						<p><strong>Descrição:</strong>  {product.description}</p>
						<p><strong>Preço:</strong>  {product.price}</p>
						<p><strong>Quantidade: </strong> {product.quantity} </p>
						<p>
							<strong>Quantidade: </strong> 
							<button><FiMinusSquare /></button>
							{product.quantityPurchase} 
							<button><FiPlusSquare /></button>
						</p>
						<p><strong>Total: R$ {parseFloat(product.price) * product.quantity}</strong></p>
					</li>
				)
		});
	}
 	return products && products.length ? (
 		<Container>
 			<ul>
 				{printProductsInCart()}
 			</ul>
 		</Container>
 		) : (
 			<h2>Carrinho vazio</h2>
 		)
}