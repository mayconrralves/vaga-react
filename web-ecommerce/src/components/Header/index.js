import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut} from '../../store/modules/auth/actions';
import { Container } from './styles';
import Title from '../Title';
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
							<Link to='/profile' >Perfil</Link>
						</>		
					) : (
						<>
							<Link to='/signup'>Cadastrar</Link>
							<Link to='/login'>Entrar</Link>
						</>
					)
				}
				<Link to='/cart'>Carrinho</Link>
			</nav>
		</Container>
		);
}	