import styled from 'styled-components';

export const Container = styled.h1`
		a {
			@media (max-width: 800px){
				font-size: 1.4em;
			}
			${props=> !props.isAuth && (
				`
					@media (max-width: 640px){
						font-size: 1em;
					}

					@media (max-width: 510px){
						font-size: 1em;
					}
					@media (max-width: 375px){
						font-size: 0.8em;
					}
				`
			)}
			color: #3D550C;
			font-size: 1.6em;
			font-family: 'Train One', sans-serif;
			font-weight: bold;
			text-decoration: none;
		}

`;