import styled from 'styled-components';

export const Container = styled.header`
	height: 90px;
	display: flex;
	flex-direction: row;
	background-color: rgba(129, 182, 34, .5);
	align-items: center;
	h1 {
		@media(max-width: 820px){
			width: 80%;
		}
		@media(max-width: 490px){
			padding-left: 20px;
		}
		padding-left: 70px;
		width: 50%;
	}
	nav {
		width: 50%;
		display: flex;
		align-items: baseline;
		justify-content: flex-end;
		margin-right: 25px;
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
		.menu {
			@media (max-width: 820px){
				display: none;
			}
		}
		a {
			color: #fff;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
			margin-left: 12px;
			svg {
				padding-top: 3px;
				font-size: 1em;
			}

	}

`;