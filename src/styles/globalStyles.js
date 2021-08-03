import { createGlobalStyle } from "styled-components";

const GlobaleStyle = createGlobalStyle`

    :root {
        --green-color : #02be6e;
        --light-green-color : #00d07769;
        --grey-text : #787878;
        --white-color : #fff;
        --transition : ease .3s;
    }

    body {
        overflow-x: hidden;
    }
`;

export default GlobaleStyle;