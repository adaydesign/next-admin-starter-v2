import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
// import Link from '@material-ui/core/Link';
import useStyles from './style'

export const Copyright = () => {
    return (
        <Typography variant="body1" color="textSecondary">
            {'Copyright © '}
            { process.env.APP_COPYRIGHT }
            {'.'}
        </Typography>
    );
}

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1">{ process.env.APP_ENG_NAME }</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container justify={'flex-end'}>
                            <Copyright />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
}

export default Footer