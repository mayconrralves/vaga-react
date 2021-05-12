import styled from 'styled-components';

const backgroundStyled = `rgba(152,152,152, 0.8)`;
export const Container = styled.div`
    width: auto;
    height: auto;
    span {
        display: flex;
        width: 90px;
        height: 22px;
        background-color: ${backgroundStyled};
        color: white;
        border-radius: 6px;
        font-size: 1em;
        position: absolute;
        visibility: hidden;
        margin-left: -60px;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        z-index: 1;
        top: 10%;
        right: -2px;
        &::before {
            content: "";
            position: absolute;
            bottom: 100%;
            right: 48%;
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