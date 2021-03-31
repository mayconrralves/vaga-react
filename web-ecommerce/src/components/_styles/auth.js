import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	height: 500px;
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
			border-radius: 8px;
			width: 45%;
			height: 50px;
			margin-bottom: 10px;
			font-size: 1.2em;
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
			display: flex;
			text-decoration: none;
			background-color: green;
			border-radius: 8px;
			width: 45%;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			color: #fff;
			font-size: 1.2em;
			height: 50px;
		}
`;