import React from 'react';
import { 
    FaFacebookSquare,
    FaTwitterSquare,
    FaInstagramSquare
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { Container } from './styles';

export default function Footer(){
    return (
        <Container>
            <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare />
            </a>
            <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer" >
                <FaTwitterSquare />
            </a>
            <a href='https://www.instagram.com' target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare />
            </a>
            <a href='#' rel="noopener noreferrer" >
                <AiOutlineMail />
            </a>
        </Container>
    )
}