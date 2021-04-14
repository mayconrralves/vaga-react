import styled from 'styled-components';

const configList = () => (
	`
		width: 600px;
		display: flex;
		border: 3px solid #fff;
		border-radius: 10px;
	`
)
const configDetailsList = () => (
	`
		margin-left: 10px;
		align-items: flex-start;
		color: #000;
		margin: 12px 0 0 12px;
		height: auto;
		h3 {
			font-size: 1.6em;
			margin-bottom: 18px;
			align-self: center;
		}
		p {
			margin-bottom: 12px;
			font-size: 1em;
			&:last-child {
				margin-top: 60px;
				align-self: center;
				font-weight: bold;
				font-size: 1.3em;
			}
		}
	`
);
const configDetailsColumn = () => (
	`	align-items: center;				
		margin-bottom: 12px;
		color: #000;
		h3 {
			margin: 8px 0;
			font-size: 1.3em;
		}
		p {
			margin-bottom: 2px;
			font-size: 1em;
			margin-bottom: 6px;
			font-weight: bold;
		}
	`
);
const configImgColumn = () => (
	`
		margin-top: 4px;
		margin-bottom: 10px;	
	`
)
export const Container = styled.main`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	section{
		width: 984px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 35px 0;
		@media screen and (max-width: 1070px){
				width: 640px;
			}
		@media screen and (max-width: 705px){
				width: 540px;
			}
		@media screen and (max-width: 560px){
				width: 90%;
			}
		button {
			border: 0;
			background-color: inherit;
			outline: 0;
			svg {
				color: #fff;
				font-size: 3.8em;
			}
		}
		.input-search {
			display: flex;
			height: auto;
			align-items: center;
			position: relative;
			width: 70%;
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
	}
	ul {
		width: 100%;
		display: flex;
		${props => props.ifList ? 'flex-direction: column;' : 'flex-wrap: wrap;'}
		justify-content: center;
		padding: 0;
		li {
			width: auto;
			display: flex;
			flex-direction: column;
			margin: 10px 35px 25px 35px;
			border-radius: 6px;
			justify-content: space-between;
			align-items: center;
			a {
				text-decoration: none;
				${props=> props.ifList ? configList() : '' }
				img {
					width: 280px;
					border-radius: 8px;
					${props=> !props.ifList ? configImgColumn() : '' }
				}
				.details {
					display: flex;
					flex-direction: column;
					${props=>props.ifList ? configDetailsList() : configDetailsColumn()}

				}	
			}
		}
	}	
`;