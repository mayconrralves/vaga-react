import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    h1 {
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: rgba(129, 182, 34, 0.5);
        margin-bottom: 25px;
    }
    h2 {
        color: #fff;
        font-size: 2em;
        margin-bottom: 10px;
    }
    hr {
        width: 100%;
        background: rgba(255,255,255, 0.4);
        height: 1px;
        border: 0;
    }
  
    a, button {
        display: flex;
        width: 80%;
        height: 40px;
        font-size: 1.5em;
        font-weight: bold;
        color: #fff;
        margin: 15px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    a {
        text-decoration: none;
    }
    button {
        width: 200px;
        border: 0;
        border-radius: 10px;
        height: 40px;
        outline: none;
        background-color: #FF7077;
    }
`;