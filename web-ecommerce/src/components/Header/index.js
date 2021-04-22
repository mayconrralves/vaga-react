import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { signOut} from '../../store/modules/auth/actions';
import { Container } from './styles';
import Title from '../Title';

export default function Header(){

	const token = useSelector(state => state.auth.token);
	const dispatch = useDispatch();
	const isMobile = useMediaQuery({ query: `(max-width: 910px)` });
	return (
		<Container>
			<Title />
			<nav>
				{
					token ? (
						<>
							<button onClick= { () => dispatch(signOut()) }>Sair</button>
							<Link to='/profile' className='menu menu-item' >Perfil</Link>
							<Link to='/orders' className='menu menu-item' >Pedidos</Link>
						</>		
					) : (
						<>
							<Link to='/signup' className='menu menu-item'>Cadastrar</Link>
							<Link to='/login' className='menu menu-item'>Entrar</Link>
						</>
					)
				}
				<Link to='/shop' className='menu menu-item'>Shop</Link>
				{ isMobile && <Link to="/menu" id='menu-mobile'><FiMenu/></Link> }
				<Link to='/cart'><FaShoppingCart /></Link>
			</nav>
		</Container>
		);
}	