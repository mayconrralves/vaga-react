import styled from 'styled-components';


export const Container = styled.main`
	display: flex;
	justify-content: space-around;
	margin-top: 10px;
	margin-right: 40px;	
	img {
			width: 500px;
			border-radius: 8px;
		}
	section {
		width: 30%;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: flex-start;
		.details-product{
			h3 {
				font-size: 2em;
				margin-bottom: 10px;
				text-transform: capitalize;
			}
			p {
				font-size: 1.2em;
				margin-bottom: 12px;
			}
		}
		.buy-function {
			display: flex;
			width: 100%;
			margin-top: 60px;
			strong {
				font-size: 1.8em;
				color: red;
			}
			input, button {
				height: 60px;
				font-size: 1.4em;
				border-radius: 8px;
				border: none;
			}
			input {
				margin-right: 6px;
				width: 50px;
				text-align: center;

			}
			button {
				width: 70%;
				background-color: green;
				color: #fff;
				font-weight: bold;

			}
		}
	}
`;