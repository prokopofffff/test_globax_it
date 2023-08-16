import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import UserInfo from './UserInfo';

function UserCard(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const {user} = props;
    return (
        <Grid item xs={12} md={3}>
            <Card sx={{display: 'flex'}} onClick={() => setOpen(true)}>
                <UserInfo
                    user={user}
                    open={open}
                    onClose={handleClose}
                />
                {console.log(open)}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {user.name}
                    </Typography>
                    <Grid container sx={{mt: 2}}>
                        <PhoneIphoneIcon/>
                        <Typography sx={{ml: 1, mt: 0.25}} gutterBottom variant="body2" component="div">
                            {user.phone}
                        </Typography>
                    </Grid>
                    <Grid container sx={{mt: 2}}>
                        <EmailIcon/>
                        <Typography sx={{ml: 1, mt: 0.25}} gutterBottom variant="body2" component="div">
                            {user.email}
                        </Typography>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default UserCard;