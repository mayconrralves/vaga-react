import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import history from '../../services/history';
import { Container } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Menu(){
    const { token } = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: `(max-width: 550px)`});
    return  (
        <>
            <Container>
                <h2>Menu</h2>
                <hr />
                <nav>
                    <ul>
                        {
                        token ? (
                            <>
                                <li><Link className="menu" to='/shop'>Shop</Link></li>
                                <li><Link className="menu" to='/orders'>Pedidos</Link></li>
                                <li><Link className="menu" to='/profile'>Perfil</Link></li>
                                <li>
                                    {
                                        isMobile && <button 
                                                        onClick={()=> dispatch(signOut())}
                                                    >
                                                        Sair
                                                    </button>
                                    }
                                </li>
                            </>
                            ): (
                                <>
                                    <li><Link className="menu" to='/login'>Entrar</Link></li> 
                                    <li><Link className="menu" to='/signup'>Cadastrar</Link></li>
                                    <li><Link className="menu"to='/shop'>Shop</Link></li>
                                </>
                            )
                        }
                        <li>
                            <Link to="#" className="menu" onClick={()=>history.goBack()}> Voltar</Link>
                        </li>
                    </ul>
                </nav>
            </Container>
        </>
    ) 
}