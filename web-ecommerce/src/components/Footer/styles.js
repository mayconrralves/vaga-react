import styled from 'styled-components';


export const Container = styled.footer`
    display: flex;
    width: 100%;
    height: 200px;
    margin-top: 50px;
    background-color: rgba(129, 182, 34, .5);
    padding-top: 80px;
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