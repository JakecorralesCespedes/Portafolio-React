// eslint-disable-next-line no-unused-vars
import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Infoinput = () => {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
            );
}
export default Infoinput