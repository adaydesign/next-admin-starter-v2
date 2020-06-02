import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const HeaderAvatar = (props) => {
    const classes = useStyles();
    const { userData } = props;

    const getSrcAvatar = () => {
        if (userData.pic_profile) {
            return userData.pic_profile //? url + userData.pic_profile
        } else {
            if (userData.gender != 0) {
                if (userData.gender == 1) {
                    return "/images/avatar/man.png";
                } else if (userData.gender == 2) {
                    return "/images/avatar/woman.png";
                }
            }
        }

        return ""
    }

    return (
        <div className={classes.avatarInHeader}>
           <Avatar alt="N" src={ getSrcAvatar() } className={classes.avatarSmall} />
           <Typography variant="body1">{userData.fullName}</Typography> 
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(HeaderAvatar);