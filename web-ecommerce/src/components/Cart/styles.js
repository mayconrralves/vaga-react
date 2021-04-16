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
	ul {
		width: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12px;
		padding: 0;
		li {
			width: 100%;
			${styledMobile(`
						width: auto;
					`)}
			background-color: rgba(129, 182, 34, .7);
			margin: 12px 0;
			padding: 6px;
			border-radius: 6px;
			list-style: none;
			section {
					max-width: 100%;
					display: flex;
					${styledMobile(`
						flex-direction: column;
						width: 280px;
					`)}
					justify-content: space-around;
					margin: 12px 10px;
					&.title {
						justify-content: space-between;
						margin-bottom: 12px;
						h3 {
							width: 100%;
							display: flex;
							justify-content: space-between;
							color: #fff;
							font-size: 1.5em;
							margin-left: 30px;
							${styledMobile(`
								margin-left: 0px;
							`)}
							margin-right: 10px;
						}

					}
					img {
						max-width: 300px;
						border-radius: 10px;
						
					}
					div {
						width: 300px;
						${styledMobile(`
								margin-top: 12px;
							`)}
						p {
							margin-bottom: 5px;
							margin-left: 15px;
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