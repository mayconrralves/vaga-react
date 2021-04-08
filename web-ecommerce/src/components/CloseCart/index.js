import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import history from '../../services/history';
import { closeCartRequest } from '../../store/modules/orders/actions';
import { getUser } from '../../store/modules/user/actions';
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
    const printCart = () => (
        products.map((product, index)=>(
            <li key={index}>
                <h4>{product.name}</h4>
                <section>
                    <img src={product.img}/>
                    <div>
                        <p><strong>Nome: </strong>{product.description}</p>
                        <p><strong>Preço: </strong> R$ {product.price}</p>
                        <p><strong>Quantidade: </strong>{product.quantityPurchase}</p>
                        <p><strong>Total: </strong> R$ {parseFloat(product.price) * parseInt(product.quantityPurchase)}</p>
                    </div>
                </section>
            </li>
        ))
    )
    useEffect(()=>{
        dispatch(getUser());
    },[]);
    return (
        <Container>
            <h3>Fechar Pedido?</h3>
            <ul>
                { products && printCart() }
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
    )
}