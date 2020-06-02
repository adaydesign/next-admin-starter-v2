import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import useStyles from './style'

const ContentHeader = (props) => {
    const { title } = props
    const classes = useStyles()

    return (<>
        <Grid container spacing={2}>
            <Grid item xs={12} >
                <Typography variant="h4" className={classes.contentTitle}>
                    {title}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>

    </>)
}

export default ContentHeader;