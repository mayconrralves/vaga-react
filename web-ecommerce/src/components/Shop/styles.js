import styled from 'styled-components';


export const Container = styled.main`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.input {
		display: flex;
		height: auto;
		align-items: center;
		position: relative;
		width: 70%;
		margin: 35px 0;
		background-color: #fff;
		border-radius: 10px;
		svg {
			position: absolute;
			font-size: 1.6em;
			left: 10px;
			opacity: 0.5;
		}
		input {
			width: 100%;
			position: relative;
			height: 50px;
			border: 0;
			border-radius: 10px;
			padding: 0 45px;
			font-size: 1.3em;
			box-shadow: inset -2px -3px 2px #CCC;
			outline: 0;
			opacity: 0.5;
		}
	}
	ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0;
		li {
			width: 25%;
			display: flex;
			flex-direction: column;
			margin: 10px 35px 25px 35px;
			
			border-radius: 6px;
			justify-content: space-between;
			align-items: center;
			a {
				text-decoration: none;
				img {
					width: 280px;
					margin-top: 4px;
					margin-bottom: 10px;
					border-radius: 8px;
				}
				.details {
					display: flex;
					flex-direction: column;
					align-items: center;
					margin-bottom: 12px;
					color: #000;
					h3 {
						margin: 8px 0;
						font-size: 1.3em;
					}
					p {
						margin-bottom: 2px;
						font-size: 1em;
						font-weight: bold;
					}

				}	
			}
		}
	}	
`;