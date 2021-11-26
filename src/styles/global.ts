import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --green-500: #00AF9C;
    --green-700: #056162;
    --white: #FFFFFF;
    --white-100: #f1f1f2e0;
    --gray-100: #d8d9db;
    --gray-200: #B1B3B5;
    --gray-300: #a6a8ab;
    --gray-350: #74787b;
    --gray-400: #3D4347;
    --gray-500: #323739;
    --gray-550: #2D3134;
    --gray-700: #2A2F32;
    --gray-800: #262D31;
    --gray-850: #1E2428;
    --gray-900: #131C21;
    --gray-950: #0D1418;
    --blue-100: #8eb2be;
    --blue-600: #085373;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-800);
    color: var(--white);
    font: 400 1rem 'Helvetica', 'Segoe UI', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  input {
    font: 400 1rem 'Helvetica', sans-serif;
    color: var(--white-100);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: var(--gray-500) !important;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gray-400);
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
