import React from 'react';
import Lottie from 'lottie-react-web'
import animationData from '../../assets/58003-loading.json'
import { Container } from './styles';
export default function  Loading ( { width, height, isImage }) {
      const LootieAnimation = () => (
          <Lottie
            options={{
            animationData
            }}
            width={ width ? width : '50%'}
            height={ height ? height : '50%'}
        />  
      )
    return !isImage ? (
      <Container>
          <LootieAnimation />
      </Container>
    ) : (
      <LootieAnimation />
    )
}