import { extendTheme } from "@chakra-ui/react";

const theme = { 
    config: {
        initialColorMode: "dark",
        useSystemColorMode: true,
    },
    styles:{
        global: {
            body: {
                margin: 0,
                'min-width': '320px',
                'min-height': '100vh',
              }
              
        }
    }
};
export default extendTheme(theme)