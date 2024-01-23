import { createGlobalStyle } from 'styled-components'
import { deviceBreakPoints } from './deviceBreakPoints'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    
  }

  body {
    background-color: ${({ theme }) => theme.colors.darkBlue_400};
    color: ${({ theme }) => theme.colors.gray_100};

    /* height: 100dvh; */
  }

  body, input, button, textarea {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    outline: none;

    @media (max-width: ${deviceBreakPoints.md}) {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover,a:hover {
    filter: brightness(0.9);
  }
`