import styled from 'styled-components';

const mediaScreen920 = styles => (
	`
	@media screen and (max-width: 920px){
		${styles}
	}
	`
)

const mediaScreen321 = styles => (
	`
	@media screen and (max-width: 331px){
		${styles}
	}
	`
)

export const Container = styled.main`
	width: 100%;
	min-height: 60vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2{
		margin: 30px 0;
		font-size: 2.5em;
		color: #fff;
		${mediaScreen920(`
			font-size: 1.7em;
		`)}
	}
		
	section {
		display: flex;
		align-items: flex-start;
		${mediaScreen321(
			`
				width: 300px;
			`
		)}
		${mediaScreen920(
			`
			flex-direction: column; 
			align-items: center;
			`
		)}
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
				${mediaScreen920(`
					height: 220px;
				`)}
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
				${mediaScreen920(`
					 margin-bottom: 20px;
					 width: 98%;
					 align-self: center;
			   `)}
				width: 100%;
				border-radius: 10px;
				border: 0;
				color: #fff;
				font-size: 1.3em;
				font-weight: bold;
				background-color: green;
				height: 40px;
				margin-top: 8px;
				&:focus {
					outline: none;
				}
			}
		}
		
		input {
			&[type='file'] {
		  			display: none;
				}
			&:focus {
				outline: none;
			}
		}

		form {
			width: 100%;
			height: 500px;
			display: flex;
			flex-direction: column;
			margin-left: 12px;
			${mediaScreen321(
				`
					margin-left: 0;
				`
			)}
			input {
				width: 100%;
				height: 55px;
				border-radius: 8px;
				border: 0;
				margin-bottom: 12px;
				font-size: 1.5em;
				padding-left: 12px;
				&:last-child {
				 	background-color: green;
				 	margin-top: 20px;
				 	color: #fff;
				 	font-size: 1.5em;
				 	font-weight: bold;
				 }
			}
		}
	}


`;