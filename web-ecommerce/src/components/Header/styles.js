import styled from 'styled-components';

export const Container = styled.header`
	height: 90px;
	display: flex;
	flex-direction: row;
	background-color: rgba(129, 182, 34, .5);
	align-items: center;
	h1 {
		padding-left: 70px;
		width: 50%;
	}
	nav {
		width: 50%;
		text-align: right;
		padding-right: 70px;
		button {
			width: 80px;
			height: 28px;
			border-radius: 6px;
			font-weight: bold;
			font-size: 1.2em;
			border: 0;
			color: #fff;
			background-color: #FF7077;
			margin-right: 16px;
		}
		a {
			color: #fff;
			margin-right: 25px;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
		}

	}

`;