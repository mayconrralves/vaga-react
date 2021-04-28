import styled from 'styled-components';

const configLarge = () => (
		`
			justify-content: center;
			align-items: flex-start;
			flex-direction: row;
			margin-right: 40px;
		`
)

const configMiddle = () =>  (
	`
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;
	`
)

const noProduct = () => `
	strong {
					
		font-size: 1.3em;
		color: red;
	}
`
const avalaibleProduct = props => `
	input, button {
		height: 60px;
		font-size: 1.5em;
		border-radius: 8px;
		border: none;
		align-self: flex-end;
		justify-self: flex-end;
	}
	input {
		margin-right: 6px;
		width: 50px;
		height: 50px;
		text-align: center;
		font-size: 1.5em;
	}
	button {
		width: 180px;
		outline: 0;
		height: 50px;
		background-color: green;
		color: #fff;
		font-weight: bold;
		${props=>props.isTablet ? 'margin-right: 40px;' : 'margin-right: 140px;'}
		${props=>props.isMobile && 'margin-right: 0px;'}
	}
`

export const Container = styled.main`
	display: flex;
	${props=> props.isMobile ? configMiddle() : configLarge()}
	margin-top: 50px;
	max-width: 100%;
	min-height: 50vh;
	section {
		img {
				margin: 0 18px;
				border-radius: 8px;
			}
	}
	aside {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.details-product{
			h3 {
				${props=>props.isMobile ? 'margin-top: 18px;' : ''}
				font-size: 2em;
				margin-bottom: 20px;
				text-align:  center;
				text-transform: capitalize;
			}
			p {
				font-size: 1.2em;
				padding-left: 16px;
				margin-bottom: 12px;
				color: rgba(0,0,0,0.9);
			}
		}
		.buy-function {
			display: flex;
			margin-top: 25px;
			${props => props.productQuantity ? avalaibleProduct(props) : noProduct()}			
		}
	}
`;