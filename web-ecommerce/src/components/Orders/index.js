import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../store/modules/orders/actions';
import { getUser } from '../../store/modules/user/actions';
import PrintOrders from './PrintOrders';
import Loading from '../Loading';

export default function Orders(){
    const dispatch = useDispatch();
    const { orders, success : successOrder } = useSelector(state => state.orders);
    const { user, success: successUser } = useSelector(state => state.user);
    useEffect(()=>{
        if(!successUser) dispatch(getUser());
        if(successUser) dispatch(getOrders(user.email));
    },[successUser]);
    return successOrder ? (
        <Container>
             <h2> Meus Pedidos </h2>
            <ul>
                <PrintOrders orders={orders}/>
            </ul>
        </Container>
    ) : (
        <Loading />
    )
}