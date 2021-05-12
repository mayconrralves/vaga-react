import styled from 'styled-components';

const backgroundStyled = `rgba(152,152,152, 0.8)`;
export const Container = styled.div`
    width: auto;
    height: auto;
    span {
        display: flex;
        width: 100px;
        height: 22px;
        background-color: ${backgroundStyled};
        color: white;
        border-radius: 6px;
        font-size: 1em;
        position: relative;
        visibility: hidden;
        margin-left: -60px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        z-index: 1;
        left: 30px;
        &::before {
            content: "";
            position: relative;
            bottom: 16px;
            left: 70px;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent ${backgroundStyled} transparent;
        }
    }
    &:hover {
        span {
            visibility: visible;
        }
    }
`;