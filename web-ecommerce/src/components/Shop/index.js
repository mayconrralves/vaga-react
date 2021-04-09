import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import { FiSearch } from "react-icons/fi";
export default function Store(){	
	const [product, setProduct] = useState('');
	const dispatch = useDispatch();
	const { msgError, products} = useSelector(state=>state.products);
	const listProducts = ( products ) => {
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
		
		const filterProducts = () => {
			const re = new RegExp(product);
			const filter = products.filter(product=> !!product.name.match(re));
			return listProducts(filter)
		}
		const searchProduct = event => {
			setProduct(event.target.value);
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
						<>
							<div className='input'>
								<input 
								type='search' 
								autoComplete={false} 
								onChange={searchProduct} 
								placeholder='Procure...'
							/>
							<FiSearch />
							</div>
							<ul>
								{product ? filterProducts () : listProducts(products)}
							</ul>
						</>
					)
			} 
					
		</Container>
	)
}