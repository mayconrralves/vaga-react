import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    h3 {
        width: 70%;
        text-align: center;
        color: #fff;
        font-size: 1.8em;
        background-color: rgba(129, 182, 34, .7);
        border-radius: 12px;
    }
    ul {
        width: 70%;
        flex-direction: row;
        align-items: center;
        padding: 0;
        li {
        background-color: rgba(129, 182, 34, .7);
        border-radius: 12px;
        width: 100%;
        height: auto;
        padding-bottom: 20px;
        margin: 15px 0;
        list-style: none;
        h4{
            text-align: center;
            font-size: 1.5em;
            margin: 15px 0;
            color: #fff;
        }

        section {
            display: flex;
            flex-direction: row;
            width: 100%;
            font-size: 1em;
            justify-content: space-around;
            align-items: center;
            img {
                width: 15%;
            }
            div {
                width: 70%;
                display: flex;
                flex-direction: column;
                p {
                    margin-bottom: 5px;
                    color: #fff;
                }
            }
        }
    }
    }
    
    .total{
        width: 70%;
        font-size: 1.8em;
        display: flex;
        justify-content: space-between;
        padding: 6px 18px;
        color: #fff;
        background-color: rgba(129, 182, 34, .7);
        border-radius: 12px;
        margin-bottom: 20px;
    }
    .buttons {
        display: flex;
        width: 70%;
        justify-content: space-between;
        button{
            width: 40%;
            color: #fff;
            font-size: 1.2em;
            font-weight: bold;
            height: 50px;
            border-radius: 12px;
            border: 0;
            background-color: green;

            &:focus{
                border: 0;
            }
        }
    }
`;