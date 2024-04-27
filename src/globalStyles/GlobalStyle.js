import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
/* ----------- basic properties ---------------- */

body{
  // background-color: greenyellow;
}

/* ----------- basic properties ---------------- */

/* ================ components ================ */

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
img {
  display: block;
}


/* ================ components ================ */

`;
