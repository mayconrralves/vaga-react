import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    align-items: center;
    h1 {
        width: 100%;
        margin-bottom: 25px;
        display: flex;
        a {
            width: 100%;
            text-align: center;
            background-color: rgba(129, 182, 34, 0.5);
        }
    }
    h2 {
        width: 100%;
        text-align: center;
        color: #fff;
        font-size: 2.2em;
        margin-bottom: 10px;
    }
    hr {
        width: 100%;
        background: rgba(255,255,255, 0.4);
        height: 1px;
        border: 0;
    }
  
    .menu, button {
        display: flex;
      
        height: 40px;
        font-size: 1.6em;
        font-weight: bold;
        color: #fff;
        margin: 15px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
    }
    .menu {
        width: 40%;
    }
    .menu:hover{
        width: 80%;
        background-color: rgba(129, 182, 34, .7);
        transition-duration: 0.8s;
        transition-property: background-color width;
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