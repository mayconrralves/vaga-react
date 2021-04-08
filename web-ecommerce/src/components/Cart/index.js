import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { 
	updateCartSum, 
	updateCartSub, 
	deleteProductInCart,
	cleanCart,
} from '../../store/modules/cart/actions';

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
						<section className='title'>
							<h3><span>{product.name}</span><span onClick={()=>deleteProduct(index)}><MdDelete /></span></h3>
						</section>
						<section>
							<img src={product.img}/>
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
 	return products && products.length ? (
 		<Container>
 			<ul>
 				{printProductsInCart()}
 			</ul>
			 {
				 products.length && <div className='buttons-cart'>
					 <button 
					 onClick={()=> dispatch(cleanCart())}
					 >
						 Esvaziar carrinho
					</button>
					 <Link to='/cart/close'>Fechar Carrinho</Link>
				 </div>
			 }
 		</Container>
 		) : (
 			<h2>Carrinho vazio</h2>
 		)
}