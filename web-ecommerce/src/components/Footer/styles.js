import styled from 'styled-components';


export const Container = styled.footer`
    display: flex;
    width: 100%;
    height: 25vh;
    margin-top: 50px;
    bottom: 0;
    background-color: rgba(129, 182, 34, .5);
    align-items: center;
    justify-content: center;
    a {
        margin: 0 20px;
        svg {
            @media screen and (max-width: 600px){
                font-size: 2em;
            }
            font-size: 4em;
            color: #fff;
           
        }

    }
`;