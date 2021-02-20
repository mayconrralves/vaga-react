import styled from 'styled-components';

export const Container = styled.main`
	height: 500px;
	display: flex;
	justify-content: center;
	div{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 25px;
		font-size: 1.6em;
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
			&:last-child  {
					margin-top: 8px;
					background-color: green;
					color: #fff;
				}
		}

	}
`;