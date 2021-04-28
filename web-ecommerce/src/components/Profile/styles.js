import styled from 'styled-components';

const mediaScreenMiddle = styles => (
	`
	@media screen and (max-width: 920px){
		${styles}
	}
	`
)

const mediaScreenMobile = styles => (
	`
	@media screen and (max-width: 450px){
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
		${mediaScreenMiddle(`
			font-size: 1.7em;
		`)}
	}
		
	section {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		${mediaScreenMobile(
			`
				width: 300px;
			`
		)}
		${mediaScreenMiddle(
			`
				flex-direction: column; 
				align-items: center;
			`
		)}
		width: 100%;
		
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
				${mediaScreenMiddle(`
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
				${mediaScreenMiddle(`
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
			display: flex;
			flex-direction: column;
			margin-left: 12px;
			align-items: center;
			${mediaScreenMobile(
				`
					margin-left: 0;
				`
			)}
			input {
				${mediaScreenMobile(`
					width: 300px;
				`)}
				width: 70%;
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