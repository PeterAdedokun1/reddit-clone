import { ComponentStyleConfig } from "@chakra-ui/theme"


export const Button: ComponentStyleConfig = {

    baseStyle: {
        borderRadius: "20px",
        fontSize: "10pt",
        fontWeight: 700,
        color: "white",
        p: 0,
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
   
};
