import PropTypes from 'prop-types';
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import * as React from "react";


const FullPageLoader = ({show}) =>
    <Backdrop open={show}
              sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
    >
        <CircularProgress color="inherit"/>
    </Backdrop>

FullPageLoader.propTypes = {
    show: PropTypes.bool
};

export default FullPageLoader;