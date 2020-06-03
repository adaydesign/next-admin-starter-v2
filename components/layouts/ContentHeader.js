import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import useStyles from './style'
import BreadcrumbsMenu from '../../components/shared/BreadcrumbsMenu'

const ContentHeader = (props) => {
    const { title } = props
    const classes = useStyles()

    return (<>
        <Grid container spacing={2} alignItems="flex-end">
            <Grid item xs={6} >
                <Typography variant="h4" className={classes.contentTitle}>
                    {title}
                </Typography>
            </Grid>
            <Grid item container xs={6} justify="flex-end">
                <BreadcrumbsMenu />
            </Grid>
        </Grid>
        <Grid container>
            <Grid item xs={12}>
                <Divider />
            </Grid>
        </Grid>

    </>)
}

export default ContentHeader;