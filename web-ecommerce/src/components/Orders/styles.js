import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        width: 70%;
        height: 50px;
        color: #fff;
        background-color: rgba(129, 182, 34, .7);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        margin: 20px 0 10px 0;
    }
    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        li {
            background-color: rgba(129, 182, 34, .7);
            height: auto;
            width: 70%;
            margin: 10px 0;
            list-style: none;
            border-radius: 10px;
            padding: 10px;
            color: #fff;
            h3 {
                margin: 6px 0 18px 0;
            }
            table {
                width: 100%;
                th, td {
                    border: solid 2px #fff;
                    padding: 4px;
                    text-align: center;
                    font-size: 1.1em;
                    border-radius: 3px;
                }
                th, tfoot {
                    font-size: 1.3em;
                    font-weight: bold;
                }
            }
        }
    }
`;