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
            <a 
                data-testid="facebook"
                href='https://www.facebook.com' 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaFacebookSquare />
            </a>
            <a 
                data-testid="twitter" 
                href='https://www.twitter.com'
                target="_blank" 
                rel="noopener noreferrer" 
            >
                <FaTwitterSquare />
            </a>
            <a 
                data-testid="instagram"
                href='https://www.instagram.com' 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <FaInstagramSquare />
            </a>
            <a 
                data-testid="mailto"
                href='mailto:teste@teste.com'
                rel="noopener noreferrer" >
                <AiOutlineMail />
            </a>
        </Container>
    )
}