import React, { useEffect } from 'react';
import { Container } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { getOrders } from '../../store/modules/orders/actions';
import { getUser } from '../../store/modules/user/actions';
export default function Orders(){
    const dispatch = useDispatch();
    const { orders } = useSelector(state => state.orders);
    const { user, success } = useSelector(state => state.user);
    let total = 0;
    /** Print each table's item */
    const listItemOrders = items => {
        const keys = Object.keys(items);
        total = 0;
        return items.map((item, index)=>{
            total += parseFloat(item.price) * parseFloat(item.quantityPurchase);
            const totalItem = parseFloat(item.price) * parseFloat(item.quantityPurchase).toFixed(2)
            return (
            <tr key={index}>
                <td>{ item.name}</td>
                <td>{ item.description}</td>
                <td>{ item.quantityPurchase}</td>
                <td> R$ { item.price.toLocaleString()}</td>
                <td> R$ {totalItem.toFixed(2).replace('.', ',') }</td>
            </tr>
        )});
    }
    /**  Print each order's table*/
    const printOrders = () => {
        const orderKeys = Object.keys(orders);
        return orderKeys.map((key, index)=> (
            <li key={index}>
                    <h3>Pedido: {key}</h3>
                    <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Unidades</th>
                            <th>Preço</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                    {   
                        listItemOrders(orders[key])
                    }
                    </tbody> 
                    <tfoot>
                        <tr>
                            <td colSpan={2}> Valor Total: </td>
                            <td colSpan={3}>R$ {total.toFixed(2).replace('.', ',')}</td>
                        </tr>
                    </tfoot>    
                </table>

                
               
            </li>
        )); 
    }
    useEffect(()=>{
        if(!success) dispatch(getUser());
        if(success) dispatch(getOrders(user.email));
    },[success]);
    return orders ? (
        <Container>
            <ul>
                { printOrders() }
            </ul>
        </Container>
    ) : (
        <h2>
            Loading...
        </h2>
    )
}