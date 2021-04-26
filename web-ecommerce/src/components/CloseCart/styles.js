import styled from 'styled-components';

const WIDTH_STANDARD = '70%';

const styledMobile =  styles => `
    @media screen and (max-width: 750px){
        ${styles}
    }
`
const widthMobile = () => `
    @media screen and (max-width: 480px){
        width: 95%;
    }
`
export const Container = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 60vh;
    h2 {
        width: ${WIDTH_STANDARD};
        ${widthMobile()}
        text-align: center;
        color: #fff;
        font-size: 1.8em;
        background-color: rgba(129, 182, 34, .7);
        border-radius: 12px;
        margin-top: 20px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        width: ${WIDTH_STANDARD};
        ${widthMobile()}
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
            div {
                h3{
                    text-align: center;
                    font-size: 1.5em;
                    margin: 15px 0;
                    color: #fff;
                }
            }

            div {
                display: flex;
                flex-direction: row;
                width: 100%;
                font-size: 1.2em;
                justify-content: space-around;
                align-items: flex-start;
                ${styledMobile(`
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                `)}
                section {
                    width: auto;
                    padding: 12px;
                    img {
                        width: auto;
                        ${widthMobile()};
                    }
                } 
                aside {
                    @media screen and (max-width: 350px){
                        width: calc(300 * 95%);
                    }
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    p {
                        margin-bottom: 5px;
                        color: #fff;
                        
                       
                    }
                }
            }
        }
    }
    
    .total{
        width: ${WIDTH_STANDARD};
        ${widthMobile()}
        font-size: 1.8em;
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 6px 18px;
        color: #fff;
        background-color: rgba(129, 182, 34, .7);
        border-radius: 12px;
        margin-bottom: 20px;
    }
    .buttons {
        display: flex;
        width: ${WIDTH_STANDARD};
        ${styledMobile(`
                flex-direction: column;
                justify-content: center;
                align-items: center;
        `)}
        ${widthMobile()}
        justify-content: space-between;
        button{
            width: 40%;
            ${styledMobile(`
                   width: 100%;
                   margin-top: 10px;
                   margin-bottom: 20px;
                `)}
            color: #fff;
            font-size: 1.2em;
            font-weight: bold;
            height: 50px;
            border-radius: 12px;
            border: 0;
            background-color: green;

            &:focus{
                outline: 0;
            }
        }
    }
`;