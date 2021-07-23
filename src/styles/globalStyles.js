import { createGlobalStyle } from "styled-components";

const GlobaleStyle = createGlobalStyle`

    :root {
        --green-color : #02be6e;
        --grey-text : #787878;

        --transition : ease .3s;
    }

    body {
        overflow-x: hidden;
    }
`;

export default GlobaleStyle;