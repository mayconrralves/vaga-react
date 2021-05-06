import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from './styles';
import history from '../../services/history';
import { closeCartRequest } from '../../store/modules/orders/actions';
import { getUser } from '../../store/modules/user/actions';
import PrintCart from './PrintCart';

export default function CloseCart(){
    const { products } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    
    const dispatch = useDispatch();
    const backForCart = () => {
        history.goBack();
    }
    const closeOrder = () => {
        dispatch(closeCartRequest(user.email, products));
    }
    const calculatorTotal = () => {
        return products.reduce((total, product)=> (
            total + parseFloat(product.price) * parseInt(product.quantityPurchase)
        ),0);
    }
    
    useEffect(()=>{
        dispatch(getUser());
    },[]);
    return products.length ? (
        <Container>
            <h2>Fechar Pedido?</h2>
            <ul>
                { products && <PrintCart products={products}/> }
            </ul>
            <div className='total'>
                <strong>Total: </strong>
                <span>{products && calculatorTotal()}</span>
            </div>
            <div className='buttons'>
                <button onClick={closeOrder}>Confirma</button>
                <button onClick={backForCart}>Cancelar</button>
            </div>            
        </Container>
    ) : (
        <Redirect to='/shop' />
    )
}