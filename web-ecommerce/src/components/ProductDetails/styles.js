import styled from 'styled-components';

const mobileMedia = styles => `
	@media screen and (max-width: 728px) {
		${styles}
	}
` 


export const Container = styled.main`
	display: flex;
	width: 100%;
	min-height: 55vh;
	justify-content: center;
	margin-top: 30px;
	align-items: center;
	${mobileMedia(`
		flex-direction: column;
	`)}
	section {
		width: auto;
		height: inherit;
		padding-top: 10px;
		img{
			min-width: 300px;
			max-width: 500px;
		}
	}
	aside {
		width: 400px;
		height: inherit;
		display: flex;
		flex-direction: column;
		align-items: center;
		h3{
			width: 100%;
			height: 50px;
			text-align: center;
			font-size: 2.3em;
		}
		.details {
			width: 70%;
			p{
				margin-bottom: 6px;
				font-size: 1.2em;
				color: rgba(0,0,0,0.9);
			}
		}
		.buy-function{
			width: 70%;
			padding-top: 18px;
			input{
				width: 50px;
				height: 50px;
				font-size: 1.4em;
				border-radius: 12px;
				border: 0;
				text-align: center;
			}
			button {
				width: 180px;
				height: 50px;
				color: #fff;
				background-color: green;
				border-radius: 12px;
				border: 0;
				font-size: 1.4em;
				font-weight: bold;
				margin-left: 16px;
			}
		}
	}
`;