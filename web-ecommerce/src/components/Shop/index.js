import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import { FiSearch, FiList, FiColumns } from "react-icons/fi";
import {isMobile} from 'react-device-detect';

import Loading from '../Loading';
import ListProducts from './ListProducts';
export default function Store(){	
	const [productSearch, setProductSearch] = useState('');
	const [isList, setIsList] = useState(false);

	const dispatch = useDispatch();
	const { msgError, products, loading } = useSelector(state=>state.products);
	const mediaMobile = useMediaQuery({ query: `(max-width: 650px)` });
	
		
		const filterProducts = () => {
			const re = new RegExp(productSearch);
			const filter = products.filter(product=> !!product.name.toLowerCase().match(re));
			return <ListProducts products={ filter } isList={isList} />
		}
		const searchProduct = event => {
			setProductSearch(event.target.value.toLowerCase());
		}
	useEffect(()=>{
		dispatch(getProducts());
	}, []);
	/** 
	 * Source: https://stackoverflow.com/questions/48961342/how-to-blur-the-input-provided-in-semantic-ui-react
	 * Hide mobile keyboard after clicking search
	 */
	const shouldBlur = (e) => {
		if (e.keyCode === 0) {
		  e.target.blur();
		}
	  }
	useEffect(()=> {
		if(mediaMobile && isList) setList(false); 
	}, [mediaMobile]);
	return loading ? (
						<Loading width='50%'/>	
				) : (
		<Container ifList={isList}>
						{
							msgError ? (
								<div className='errorMessage'>{msgError}</div>
								):(
									<>
										<section>
											<div className='input-search'>
												<input 
													type='search' 
													autoComplete='false'
													onChange={searchProduct} 
													placeholder='Procure...'
													onKeyPress={ isMobile ? shouldBlur : undefined }
												/>
												<FiSearch />
											</div>
											<button onClick={()=> setIsList(!isList)}>
												{  !isList ? <FiList /> : <FiColumns/> }
											</button>
										</section>
										<ul>
											{
											productSearch 
												? filterProducts () 
												: <ListProducts 
														products={products} 
														isList={isList}
												/>
											}
										</ul>
									</>
								)
						} 				
		</Container>
	)
}