import * as React from 'react';
import {useGetUsersQuery} from '../services/UsersApi';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import PageLoader from "./PageLoader";
import UserCard from './UserCard';


function UsersList(props) {
    const term = props;
    const {
        data = [],
        isLoading,
        isFetching,
        isError,
        error,
    } = useGetUsersQuery(term ? term : "");
    
    if (!isLoading) {
        if (data?.length === 0) {
            return (
                <React.Fragment>
                    <Typography sx={{ml: 2}} gutterBottom variant="h5" component="div">
                        Пользователи отсутствуют.
                    </Typography>
                </React.Fragment>
            );

        }
    }
    
    const showLoader = isLoading || isFetching;

    return (
        <React.Fragment>
            <PageLoader show={showLoader}></PageLoader>
            
            <Grid container spacing={4} sx={{ml: 1, mt: 1}}>
                {data?.map((user) => (
                    <UserCard user={user} key={user.id}/>
                ))}
            </Grid>
        </React.Fragment>
    );
}

export default UsersList;