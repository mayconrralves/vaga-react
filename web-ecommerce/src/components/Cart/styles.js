import styled from 'styled-components';

export const Container = styled.main`
	width: 100%;
	ul {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 12px;
		li {
			width: 70%;
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
`;