import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints:{
        values:{
            mobile:550,
            tablet:900,
            laptop:1820,
            desktop:2200,
            SuperDesktop:3500,
        }
    }
});