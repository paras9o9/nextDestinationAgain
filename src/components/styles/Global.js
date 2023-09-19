import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
    margin: 0;
    padding: 0;
}
body { 
    background: transparent;
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
}
`

export default GlobalStyles;