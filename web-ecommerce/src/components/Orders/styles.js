import styled from 'styled-components';

const styledMobile500 = styles => (
    `
        @media screen and (max-width: 500px){
            
            ${styles}
        }
    `
)
const styledMobile660 = () => (
    `
        @media screen and (max-width: 770px){
            width: 95%;
        }
    `
)
export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        ${styledMobile660()}
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
            ${styledMobile660()}
            width: 70%;
            background-color: rgba(129, 182, 34, .7);
            height: auto;
            margin: 10px 0;
            list-style: none;
            border-radius: 10px;
            padding: 10px;
            color: #fff;
            h3 {
                margin: 6px 0 18px 0;
                ${styledMobile500(`
                        font-size: 0.8em;
                    `)}
            }
            table {
                width: 100%;
                th, td {
                    ${styledMobile500(`
                        font-size: 0.7em;
                        padding: 2px;
                    `)}
                    border: solid 2px #fff;
                    padding: 4px;
                    text-align: center;
                    font-size: 1.1em;
                    border-radius: 3px;
                }
                th, tfoot {
                    ${styledMobile500(`
                        font-size: 0.9em;
                    `)}
                    font-size: 1.3em;
                    font-weight: bold;
                }
            }
        }
    }
`;