import UsersList from "./UsersList";
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import * as React from 'react';

function Dashboard(){
    const [value, setValue] = useState('');

    return (
        <React.Fragment>
            <TextField
                id="search"
                label="Поиск"
                type="search"
                variant="filled"
                sx={{width: 600, ml: 50, mt: 2}}
                onChange={(event) => setValue(event.target.value)}
            />
            <Grid container spacing={4} sx={{mb: 4, mt: 1}}>
                <UsersList term={value}/>
            </Grid>
        </React.Fragment>
    );
}

export default Dashboard;