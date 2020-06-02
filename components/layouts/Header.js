import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Menu, ExitToApp, VpnKey } from '@material-ui/icons';
import HeaderAvatar from './HeaderAvatar'
import Link from 'next/link'
import useStyles from './style'

const HeaderAppBar = (props) => {
    const classes = useStyles();
    const { userData, logoutHandle } = props;

    const isLogin = () => {
        // console.log('check is login - header')
        // console.log(userData)
        return userData && userData.loginSuccess
    }

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    {process.env.APP_NAME}
                </Typography>
                {isLogin() ? (
                    <>
                        <HeaderAvatar />
                        <Button color="inherit"
                            variant="outlined"
                            onClick={logoutHandle}
                            startIcon={<ExitToApp />}>
                            ออกจากระบบ
                        </Button>
                    </>
                ) : (
                        <Link href='/login'>
                            <Button color="inherit"
                                variant="outlined"
                                startIcon={<VpnKey />}>
                                เข้าสู่ระบบ
                            </Button>
                        </Link>
                    )}

            </Toolbar>
        </AppBar>
    );
}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(HeaderAppBar);
