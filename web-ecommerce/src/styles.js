import { createGlobalStyle  } from 'styled-components';


const globalStyle = createGlobalStyle`
	
	*{
		margin: 0;
		box-sizing: border-box;
	}
	html, body {
		 
		width: 100%;
		min-height: 100%;
		background-image: linear-gradient(90deg,  #B6CB9E 0%, #D1F0B1 100%);
		margin: 0;
		a, h2, h3, p, input, button {
			font-family:  cursive, sans-serif;
		}
	}

`;

export default globalStyle;