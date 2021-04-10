import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut} from '../../store/modules/auth/actions';
import { Container } from './styles';
import Title from '../Title';
import { FaShoppingCart } from "react-icons/fa";

export default function Header(){

	const token = useSelector(state => state.auth.token);
	const dispatch = useDispatch();
	return (
		<Container>
			<Title />
			<nav>
				{
					token ? (
						<>
							<button onClick= { () => dispatch(signOut()) }>Sair</button>
							<Link to='/profile' className='menu' >Perfil</Link>
							<Link to='/orders' className='menu' >Pedidos</Link>
						</>		
					) : (
						<>
							<Link to='/signup' className='menu'>Cadastrar</Link>
							<Link to='/login' className='menu'>Entrar</Link>
						</>
					)
				}
				<Link to='/shop' className='menu'>Shop</Link>
				<Link to='/cart'><FaShoppingCart /></Link>
			</nav>
		</Container>
		);
}	