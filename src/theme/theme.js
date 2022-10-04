import { extendTheme } from "@chakra-ui/react";
import "@fontsource/lato";
import "@fontsource/varela";
import "@fontsource/varela-round";

const theme = extendTheme({
  fonts: {
    lato: "'Lato',sans-serif",
    varela: "'Varela', sans-serif",
    veralaRound: "'Varela Round', sans-serif",
  },
});

export default theme;
