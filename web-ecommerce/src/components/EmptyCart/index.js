import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/4496-empty-cart.json'
import { Container } from './styles';


export default function CartEmpty (){

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return (
        <Container>
            <Lottie
                options={defaultOptions}
                width='30%'
                height='30%'
            />
            <h2> Carrinho Vazio</h2>
        </Container>
    )
}