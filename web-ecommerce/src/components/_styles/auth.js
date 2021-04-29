import styled from 'styled-components';

const media = () => (
	`
		width: 600px;
		height: 55px;
		padding: 20px 0;
		font-size: 1.4em;
		@media screen and (max-width: 800px){
			width: 450px;
		}
		@media screen and (max-width: 520px){
			width: 300px;
	}
	`
)

export const Container = styled.main`
	
	@media screen and (min-height: 1000px) and (max-height: 1400px){
		height: 950px;
		
	}
	@media screen and (min-height: 320px) and (max-height: 550px){
		height: 600px;
		
	}
	width: 100%;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-top: 20px;
	align-items: center;
	
	div{
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h2 {
			@media(max-width: 800px){
				font-size: 1.4em;
			}
			font-size: 1.8em;
			margin-bottom: 22px;
			margin-top: 15px;
			color: #fff;
		}
	}
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		input {
			${media()}

			border-radius: 8px;
			margin-bottom: 10px;
			padding: 0 8px;
			border: none;
			color: #000;
			outline: none;
			
			&:last-child  {
					margin-top: 8px;
					background-color: green;
					color: #fff;
					font-weight: bold;
				}
		}
		p {
			color: rgba(255,0,0, 0.9);
			font-weight: bold;
			font-size: 1em;
			margin-bottom: 6px;
		}
	}
		.sign-register {
			${media()}
			display: flex;
			text-decoration: none;
			background-color: green;
			border-radius: 8px;
			justify-content: center;
			align-items: center;
			font-weight: bold;
			color: #fff;
			
		}

	
`;