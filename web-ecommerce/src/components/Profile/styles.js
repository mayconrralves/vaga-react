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
	label {
		width: 20%;
		border: 3px solid #fff;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		font-size: 4em;
		height: 450px;
		span {
				
			display: ${props=>props.image ? 'none' : 'inline'};
			font-weight: bold;
			color: #FFF;
			opacity: 0.3;
			font-size: 2em;
			
			}
		img {
			display: ${props=>props.image ? 'inline' : 'none'};
			border-radius: 10px;
			width: 100%;
			margin: 20px 0;
		}
	}
	input {
		&[type='file'] {
	  			display: none;
			}
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