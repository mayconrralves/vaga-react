import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
export default function Store(){	const [quantityItem, setQuantityItem] = useState(1);
	const dispatch = useDispatch();
	const { msgError, products} = useSelector(state=>state.products);
	const listProducts = ( ) => {
		return products.map(product=>(

			<li key={product.id} >
				<Link to={'/details/'+ product.id}>
					<img src={product.img} alt={"imagem de"+ product.description}/>
					<div className="details">
						<h3>{product.name}</h3>
						<p> R$ {product.price}</p>
					</div>
				</Link>
			</li>
			));
	}

	useEffect(()=>{
		dispatch(getProducts());
	}, []);
	return (
		<Container>
			{
				msgError ? (
					<div className='errorMessage'>{msgError}</div>
					):(
					<ul>
						{listProducts()}
					</ul>
					)
			} 
					
		</Container>
	)
}