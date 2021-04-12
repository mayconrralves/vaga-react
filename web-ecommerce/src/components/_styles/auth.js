import styled from 'styled-components';

const media = () => (
	`
		width: 600px;
		height: 55px;
		font-size: 1.2em;
		@media(max-width: 800px){
			width: 450px;
		}
		@media(max-width: 520px){
			width: 300px;
	}
	`
)
export const Container = styled.main`
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	div{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h2 {
			@media(max-width: 800px){
				font-size: 1.4em;
			}
			font-size: 1.8em;
			margin-bottom: 22px;
			margin-top: 15px;
			color: #fff;
		}
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		input {
			${media()}

			border-radius: 8px;
			margin-bottom: 10px;
			padding: 0 8px;
			border: none;
			color: #000;
			&:focus {
						outline: none;
					}
			&:last-child  {
					margin-top: 8px;
					background-color: green;
					color: #fff;
					font-weight: bold;

				}
		}
	}
		.sign-register {
			${media()}
			display: flex;
			text-decoration: none;
			background-color: green;
			border-radius: 8px;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			color: #fff;
			
		}
`;