import styled from 'styled-components';

export const Container = styled.header`
	height: 90px;
	display: flex;
	flex-direction: row;
	background-color: rgba(129, 182, 34, .5);
	align-items: center;
	justify-content: space-between;
	h1 {
		padding-left: 70px;
		width: 50%;
	}
	nav {
		width: 35%;
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		margin-right: 40px;
		button {
			width: 80px;
			height: 28px;
			border-radius: 6px;
			font-weight: bold;
			font-size: 1.2em;
			border: 0;
			color: #fff;
			background-color: #FF7077;
			&:focus {
				outline: none;
			}
		}
		a {
			color: #fff;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
			svg {
				padding-top: 3px;
				font-size: 1em;
			}

	}

`;