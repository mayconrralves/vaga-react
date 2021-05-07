import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/58003-loading.json';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function  Loading ( { width, height, isImage }) {
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
      const LootieAnimation = () => (
          <Lottie
            options={defaultOptions}
            width={ width ? width : '100%'}
            height={ height ? height : '100%'}
        />  
      )
    return isImage 
              ? <LootieAnimation />
              : <Container>
                  <LootieAnimation />
                </Container>
   
}

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  isImage: PropTypes.bool,
}