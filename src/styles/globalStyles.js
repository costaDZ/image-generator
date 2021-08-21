import { createGlobalStyle } from "styled-components";

const GlobaleStyle = createGlobalStyle`
    :root {
        --green-color : #02be6e;
        --light-green-color : #00d07769;
        --dark-blue-color: #191b26;
        --grey-text : #787878;
        --text-grey-color : #9aa2b0;
        --white-color : #fff;
        --transition : ease .3s;
    }

    *::before,
    *::after,
    body {
        overflow-x: hidden;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", sans-serif;
        scroll-behavior: smooth;
    }
`;

export default GlobaleStyle;