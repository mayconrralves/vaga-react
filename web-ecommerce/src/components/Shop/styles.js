import styled from 'styled-components';


export const Container = styled.main`
	width: 90%;
	display: flex;
	justify-content: center;
	align-items: center;
	ul {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
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