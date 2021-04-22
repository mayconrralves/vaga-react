import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 60vh;
    align-items: center;
    padding-top: 20px;
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
  
    nav {
        width: 100%;
        ul {
            list-style: none;
            padding: 0;
            li {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                .menu, button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 40px;
                    margin: 15px 0;
                    font-size: 1.6em;
                    font-weight: bold;
                    color: #fff;
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
            }
            button {
                width: 200px;
                border: 0;
                border-radius: 10px;
                height: 40px;
                outline: none;
                background-color: #FF7077;

            }
        }
    }
    
`;