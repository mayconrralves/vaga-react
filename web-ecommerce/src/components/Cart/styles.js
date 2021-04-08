import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	display: flex;
	
	flex-direction: column;
	align-items: center;
	ul {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12px;
		padding: 0;
		li {
			width: 100%;
			background-color: rgba(129, 182, 34, .7);
			margin: 6px 0;
			padding: 6px;
			border-radius: 6px;
			list-style: none;
			section {
					width: 100%;
					display: flex;
					justify-content: space-around;
					&.title {
						justify-content: space-between;
						margin-bottom: 12px;
						h3 {
							width: 100%;
							display: flex;
							justify-content: space-between;
							color: #fff;
							font-size: 1.5em;
						}

					}
					img {
						width: 30%;
						border-radius: 10px;
					}
					div {
						width: 50%;
						p {
							margin-bottom: 5px;
							vertical-align: middle;
							font-size: 1em;
							color: #fff;
							span {
								text-align: center;
								vertical-align: middle;
								margin: 0 2px;
								width: auto;
							}
						}
					}
				}
		}

	}
	.buttons-cart {
		display: flex;
		width: 70%;
		justify-content: space-between;
		button, a {
			border: 0;
			background-color: green;
			display: flex;
			width: 40%;
			height: 50px;
			margin: 30px 0;
			border-radius: 12px;
			color: #fff;
			font-size: 1.2em;
			font-weight: bold;
			text-decoration: none;
			align-items: center;
			justify-content: center;
	}
	}
`;