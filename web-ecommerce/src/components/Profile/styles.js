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
	section {
		display: flex;
		align-items: flex-start;
		width: 80%;
		div {
			display: flex;
			flex-direction: column;
			label {
				width: ${props=>props.image ? 'auto' : '200px'};
				border: 3px solid #fff;
				border-radius: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				color: #fff;
				font-size: 4em;
				height: 250px;
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
					height: 100%;
				}
			}
			button {
				width: 100%;
				border-radius: 10px;
				border: 0;
				color: #fff;
				font-size: 1.2em;
				font-weight: bold;
				background-color: green;
				height: 30px;
				margin-top: 4px;
			}
		}
		
		input {
			&[type='file'] {
		  			display: none;
				}
		}
		form {
			width: 80%;
			height: 500px;
			display: flex;
			flex-direction: column;
			align-items: center;
			input {
				width: 90%;
				height: 55px;
				border-radius: 8px;
				border: 0;
				margin-bottom: 12px;
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
	}


`;