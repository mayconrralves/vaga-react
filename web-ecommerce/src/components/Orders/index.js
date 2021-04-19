import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../store/modules/orders/actions';
import { getUser } from '../../store/modules/user/actions';
import PrintOrders from './PrintOrders';

export default function Orders(){
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);
    const { user, success } = useSelector(state => state.user);
   
    useEffect(()=>{
        if(!success) dispatch(getUser());
        if(success) dispatch(getOrders(user.email));
    },[success]);
    return orders ? (
        <Container>
             <h2> Meus Pedidos </h2>
            <ul>
                <PrintOrders orders={orders}/>
            </ul>
        </Container>
    ) : (
        <h2>
            Loading...
        </h2>
    )
}