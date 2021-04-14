import styled from 'styled-components';

const mediaScreen820 = styles => (
	`
		@media screen and (max-width: 820px){

			${styles}
		}
	`
)
const mediaScreen420 = styles => (
	`
		@media screen and (max-width: 420px){
			${styles}
		}
	`
)
export const Container = styled.header`
	height: 90px;
	display: flex;
	flex-direction: row;
	background-color: rgba(129, 182, 34, .5);
	align-items: center;
	h1 {
		${mediaScreen820(`
			width: 80%;
		`)}
		${mediaScreen420(`
			padding-left: 16px;
		`)}
		padding-left: 70px;
		width: 50%;
	}
	nav {
		width: 50%;
		display: flex;
		align-items: baseline;
		justify-content: flex-end;
		margin-right: 25px;
		
		button {
			width: 80px;
			height: 28px;
			border-radius: 6px;
			font-weight: bold;
			font-size: 1.2em;
			border: 0;
			color: #fff;
			background-color: #FF7077;
			${mediaScreen420(`
				display: none;
			`)}
			&:focus {
				outline: none;
			}
		}
		.menu {
			${mediaScreen820(
				`
					display: none;
				`
			)}	
		}
		a {
			color: #fff;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.2em;
			margin-left: 36px;
			svg {
				padding-top: 3px;
				font-size: 1em;
			}
		}
		#menu-mobile{
			
			svg {
				padding-top: 12px;
				font-size: 2em;
				vertical-align: bottom;
			}
		}

	}
`;