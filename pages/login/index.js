import React from 'react';
import Router from 'next/router';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from '../../components/login/style';
import LoginForm from '../../components/login/LoginForm';
import { Copyright } from '../../components/layouts/Footer';
import Alert from '../../components/shared/Alert';
import Link from 'next/link';

const LoginPage = () => {
    const classes = useStyles();

    const responseHandle = (success, data) => {
        Alert({
            title: success ? 'Login Success' : 'Login Fail!',
            icon: success ? 'success' : 'error',
            text: success ? `Welcome ${data.user_fullname}` : data.errors,
            onClose: () => {
                if (success) {
                    // redirect
                    const { pathname } = Router
                    //if(pathname == '/' ){
                    Router.push('/dashboard')
                    //}
                }
            }
        })
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={8} className={classes.image} />
            <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ลงชื่อเข้าสู่ระบบ
                    </Typography>
                    <LoginForm onResponses={responseHandle} />
                    <Box mt={1}>
                        <Link href="/">
                            <Button color="secondary">กลับหน้าหลัก</Button>
                        </Link>
                    </Box>
                    <Box mt={4}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
        </Grid>
    );
}

export default LoginPage