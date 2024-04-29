import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

/* ----------- basic properties ---------------- */

   body {
        font-family: "Bungee Shade", sans-serif;
        font-size: 14px;
        line-height: 1.28;
        font-weight: 400;
         }

/* ----------- basic properties ---------------- */

/* ================ components ================ */

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

a{
text-decoration: none;
}
img {
  display: block;
}


/* ================ components ================ */

`;
