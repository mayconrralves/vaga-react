import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/modules/products/actions';
import { FiSearch, FiList, FiColumns } from "react-icons/fi";
import Loading from '../Loading';
export default function Store(){	
	const [product, setProduct] = useState('');
	const [list, setList] = useState(false);
	const [loadImage, setLoadImage] = useState(false);
	const dispatch = useDispatch();
	const { msgError, products, loading } = useSelector(state=>state.products);
	const isMobile = useMediaQuery({ query: `(max-width: 712px)` });
	const listProducts = ( products ) => {
		return products.map(product=>(
			
			<li key={product.id} >
				<Link to={'/details/'+ product.id}>
					{!loadImage && <Loading isImage />}
					<img onLoad={() => setLoadImage(true)}src={product.img.middle} alt={"imagem de"+ product.description}/>
					<div className="details">
						<h3>{product.name}</h3>
						{list && (
							<>
								<p><strong>Marca:</strong> {product.brand}</p>
								<p><strong>Descrição:</strong>  {product.description}</p>
								<p><strong>Quantidade: </strong> {product.quantity}  unidades</p>
							</>
						)}
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

	useEffect(()=> {
		if(isMobile && list) setList(false); 
	}, [isMobile]);
	return loading ? (
						<Loading width='100%' height='100%'/>	
				) : (
		<Container ifList={list}>
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
												/>
												<FiSearch />
											</div>
											<button onClick={()=> setList(!list)}>
												{  !list ? <FiList /> : <FiColumns/> }
											</button>
										</section>
										<ul>
											{product ? filterProducts () : listProducts(products)}
										</ul>
									</>
								)
						} 			
					
		</Container>
	)
}