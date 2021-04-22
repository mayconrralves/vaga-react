import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import history from '../../services/history';
import { Container } from './styles';
import Title from '../Title';
import { signOut } from '../../store/modules/auth/actions';

export default function Menu(){
    const { token } = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: `(max-width: 550px)`});
    return  (
        <Container>
             <Title />
             <h2>Menu</h2>
             <hr />
             {
                 token ? (
                     <>
                        <Link className="menu" to='/shop'>Shop</Link>
                        <Link className="menu" to='/orders'>Pedidos</Link>
                        <Link className="menu" to='/profile'>Perfil</Link>
                        {
                            isMobile && <button 
                                            onClick={()=> dispatch(signOut())}
                                        >
                                            Sair
                                        </button>
                        }
                     </>
                 ): (
                     <>
                        <Link className="menu" to='/login'>Entrar</Link>
                        <Link className="menu" to='/signup'>Cadastrar</Link>
                        <Link className="menu"to='/shop'>Shop</Link>
                     </>
                 )
             }
             <Link to="#" className="menu" onClick={()=>history.goBack()}> Voltar</Link>
        </Container>
    ) 
}