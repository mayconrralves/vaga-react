import React from 'react';
import Lottie from 'lottie-react-web'
import animationData from '../../assets/58003-loading.json'
export default function  Loading ( { width, height }) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    return(
        <Lottie
            options={{
            animationData
            }}
            width={ width ? width : '50%'}
            height={ height ? height : '50%'}
        />
    )
}