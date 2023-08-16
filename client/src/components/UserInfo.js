import DialogContent from '@mui/material/DialogContent';
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function UserInfo(props){
    const {user, close, open, onClose} = props;

    return (
        <Dialog
            close={close}
            open={open}
            onClose={onClose}    
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>
                {onClose ? (
                    <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                    >
                    <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent>
                dialog
            </DialogContent>
        </Dialog>
    );
}

export default UserInfo;