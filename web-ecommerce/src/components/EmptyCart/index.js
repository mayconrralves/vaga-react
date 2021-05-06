import React from 'react';
import Lottie from 'lottie-react-web'
import animationData from '../../assets/4496-empty-cart.json'
import { Container } from './styles';


export default function CartEmpty (){

    return (
        <Container>
            <Lottie
                options={{
                    animationData
                }}
                width='30%'
                height='30%'
            />
            <h2> Carrinho Vazio</h2>
        </Container>
    )
}