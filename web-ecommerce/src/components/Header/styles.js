import styled from 'styled-components';

const mediaScreenTablet = styles => (
	`
		@media screen and (max-width: 910px){

			${styles}
		}
	`
)
const mediaScreenMobile = styles => (
	`
		@media screen and (max-width: 550px){
			${styles}
		}
	`
)
export const Container = styled.header`
	height: 100px;
	display: flex;
	flex-direction: row;
	background-color: rgba(129, 182, 34, .5);
	align-items: center;
	justify-content: space-between;
	h1 {
		${mediaScreenTablet(`
			width: 75%;
		`)}
		${mediaScreenMobile(`
			padding-left: 16px;
		`)}
		padding-left: 70px;
		width: 420px;
	}
	nav {
		${mediaScreenMobile(`
			width: 200px;
		`)}
		width: 450px;
		display: flex;
		align-items: baseline;
		justify-content: flex-end;
		margin-right: 50px;
		${mediaScreenMobile(`
			margin-right: 15px;
		`)}
		
		button {
			width: 80px;
			height: 28px;
			border-radius: 6px;
			font-weight: bold;
			font-size: 1.3em;
			border: 0;
			color: #fff;
			outline: none;
			background-color: #FF7077;
			${mediaScreenMobile(`
				display: none;
			`)}	
		
		}
		.menu {
			${mediaScreenTablet(
				`
					display: none;
				`
			)}	
		}
		a {
			color: #fff;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.3em;
			margin-left: 36px;
			svg {
				padding-top: 6px;
				font-size: 1.5em;
			}
		&.menu-item:hover {
			font-size: 1.8em;
			transition-duration: 0.8s;
			transition-property: font-size;
		}
		}
		#menu-mobile{
			
			svg {
				padding: 5px 0;
				font-size: 2em;
				vertical-align: text-bottom;
			}
		}

	}
`;