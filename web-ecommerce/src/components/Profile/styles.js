import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2{
		margin: 30px 0;
		font-size: 2.5em;
		color: #fff;
	}
	form {
		width: 70%;
		height: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		input {
			width: 100%;
			height: 55px;
			border-radius: 8px;
			border: 0;
			margin-top: 12px;
			font-size: 1.4em;
			padding-left: 12px;
			&:last-child {
			 	background-color: green;
			 	margin-top: 20px;
			 	color: #fff;
			 	font-size: 1.4em;
			 	font-weight: bold;
			 }
		}
	}

`;