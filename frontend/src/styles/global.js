import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}
	*:focus {
		outline: 0;
	}
	html, body, #root {
		height: 100%;
	}
	body {
    background: ${(props) => props.theme.colors.background};
		text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased;
	}
	body, input, button, textarea {
		font: 14px 'Roboto', sans-serif;
	}
	a {
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	button {
		cursor: pointer;
	}
	.Toastify__toast {
		border-radius: 4px;
	}
`;
