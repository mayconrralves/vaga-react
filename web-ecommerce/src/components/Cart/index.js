import React from 'react';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { updateCartSum, updateCartSub, deleteProductInCart} from '../../store/modules/cart/actions';
export default function Cart(){
	const { products } = useSelector(state=>state.cart);
	const dispatch = useDispatch();

	const deleteProduct = index => {
		dispatch(deleteProductInCart(index));
	}

	const updateSum = index => {
		if(products[index].quantityPurchase+1 <= products[index].quantity){
			dispatch(updateCartSum(index));
		}
	}

	const updateSub = index => {
		if(products[index].quantityPurchase-1 < 1){
			deleteProduct(index);
		} else {
			dispatch(updateCartSub(index));
		}
	}

	const printProductsInCart = () => {
		return products.map((product,index)=>{
			return (
					<li key={index}>
						<h3>{product.name} <button onClick={()=>deleteProduct(index)}><MdDelete /></button></h3>

						<p><strong>Marca:</strong> {product.brand}</p>
						<p><strong>Descrição:</strong>  {product.description}</p>
						<p><strong>Preço:</strong>  {product.price}</p>
						<p><strong>Estoque: </strong> {product.quantity} </p>
						<p>
							<strong>Quantidade: </strong> 
							<button onClick={()=> updateSub(index)}>
								<FiMinusSquare />
							</button>
							{product.quantityPurchase} 
							<button onClick={()=> updateSum(index)}>
								<FiPlusSquare />
							</button>
						</p>
						<p><strong>Total: R$ {parseFloat(product.price) * product.quantityPurchase}</strong></p>
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