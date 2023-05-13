import { ComponentStyleConfig } from "@chakra-ui/theme"


export const Button: ComponentStyleConfig = {

    baseStyle: {
        borderRadius: "20px",
        fontSize: "10pt",
        fontWeight: 700,
        color: "white",
        _focus: {
            boxShadow: "none",
        },
    },
    sizes: {
        sm: {
            fontSize: "8pt",
        },
        md: {
            fontSize: "10pt",
            // height: "28px",
        },
    },
    variants: {
        solid: {
            color: "white",
            // bg: "blue.500",

        },
        outline: {
            color: "blue.500",
            border: "1px solid",
         
        },
        oauth: {
            height: "34px",
            border: "1px solid",
          
        },
    },
};
