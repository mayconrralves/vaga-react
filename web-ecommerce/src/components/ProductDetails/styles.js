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
		justify-content: center;
		align-items: center;
		flex-direction: column;
	`
)

export const Container = styled.main`
	display: flex;
	${props=> props.isMobile ? configMiddle() : configLarge()}
	margin-top: 10px;

	max-width: 100%;
	img {
			margin-left: 18px;
			max-width: 100%;
			border-radius: 8px;
		}
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
		.details-product{
			h3 {
				${props=>props.isMobile ? 'margin-top: 18px;' : ''}
				font-size: 2em;
				margin-bottom: 20px;
				text-align:  center;
				text-transform: capitalize;
			}
			p {
				font-size: 1em;
				margin-bottom: 12px;
				margin-left: 40px;
				margin-right: 10px;
			}
		}
		.buy-function {
			display: flex;
			width: 100%;
			margin-top: 25px;
			justify-content: center;
			strong {
				font-size: 1.3em;
				color: red;
			}
			input, button {
				height: 60px;
				font-size: 1.4em;
				border-radius: 8px;
				border: none;
			}
			input {
				margin-right: 6px;
				width: 50px;
				height: 50px;
				text-align: center;

			}
			button {
				width: 180px;
				height: 50px;
				background-color: green;
				color: #fff;
				font-weight: bold;

			}
		}
	}
`;