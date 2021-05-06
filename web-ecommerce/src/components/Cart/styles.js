import styled from 'styled-components';

const styledMobile = styles => (
	`
		@media screen and (max-width: 750px){
			${styles}
		}
	`
)
export const Container = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	h2 {
		margin-top: 20px;
		font-size: 2.5em;
		color: #fff;
		width: 100%;
		height: auto;
		text-align: center;
	}
	.cart-empty {
		font-size: 2em;
	}
	ul {
		@media screen and (max-width: 380px){
			width: 100%;
		}
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12px;
		padding: 0;
		li {
			width: 100%;
			${styledMobile(`
						width: 315px;
					`)}
			background-color: rgba(129, 182, 34, .7);
			margin: 12px 0;
			padding-left: 10px;
			border-radius: 6px;
			list-style: none;
			padding-bottom: 12px;
			div {
					width: 100%;
					padding-left: 20px;
					padding-right: 10px;
					display: flex;
					${styledMobile(`
						flex-direction: column;
						width: 300px;
						padding-left: 0;
						padding-right: 0px;
					`)}
					
					h3 {
						width: 100%;
						display: flex;
						justify-content:flex-end;
						padding-bottom: 20px;
						color: #fff;
						font-size: 1.6em;
						justify-content: space-between;
						${styledMobile(`
							margin-left: 0px;
						`)}
					}
					section {
						width: auto;
						img {
							max-width: 300px;
							border-radius: 10px;
						}
					}
					
					aside {
						width: 300px;
						${styledMobile(`
								margin-top: 12px;
							`)}
						p {
							margin-bottom: 5px;
							vertical-align: middle;
							font-size: 1.2em;
							color: #fff;
							span {
								text-align: center;
								svg:first-child {
									margin-right: 6px;
									vertical-align: middle;
								}
							}
						}
					}
				}
		}

	}
	.buttons-cart {
		${styledMobile(`
			flex-direction: column;
			align-items: center;
			width: 100%;
		`)}
		display: flex;
		width: 70%;
		justify-content: space-between; 
		button, a {
			${styledMobile(`
				margin: 12px;
				width: 280px;
			`)}
			border: 0;
			background-color: green;
			display: flex;
			width: 250px;
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