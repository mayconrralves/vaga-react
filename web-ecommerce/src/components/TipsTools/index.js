import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';


export default function TipsTools ({ message , children }) {

    return (
        <Container>
            { children }
            <span>{ message }</span>
        </Container>
    )
}

TipsTools.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
}