import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import PrintProductsInCart from './PrintProductsInCart';

import { 
	updateCartSum, 
	updateCartSub, 
	deleteProductInCart,
	cleanCart,
} from '../../store/modules/cart/actions';
import CartEmpty from '../EmptyCart';

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

 	return products && products.length ? (
 		<Container>
			 <h2> Carrinho </h2>
 			<ul>
 				<PrintProductsInCart 
				 	products={products}
					updateSub={updateSub}
					updateSum={updateSum}
					deleteProduct={deleteProduct}
				/>
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
 			<CartEmpty />
 		)
}