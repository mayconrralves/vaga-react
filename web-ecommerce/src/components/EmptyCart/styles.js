import styled  from 'styled-components';

export const Container = styled.main`
    width: 100%;
    @keyframes slide {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(0);
        }
    }
    h2 {
        font-size: 2.5em;
        color: rgba(0,0,0,0.5);
        text-align: center;
        animation: 2s ease-out 0s 1 slide;
    }
`;