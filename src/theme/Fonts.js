import { Global } from "@emotion/react";

const Fonts = () => {
  <Global
    styles={`
    /* Avenir LT 65 Medium */
    @font-face {
      font-family: 'Avenir LT 65 Medium';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('./fonts/avenir-lt-65-medium.ttf') format('ttf');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* Goudy Old Style */
    @font-face {
      font-family: 'Goudy Old Style';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('./fonts/Goudy Old Style Regular.ttf') format('ttf');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;`}
  />;
};

export default Fonts;
