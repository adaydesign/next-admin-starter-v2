import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import useStyles from './style'

const ContentBody = (props) => {
    const classes = useStyles()
    const { paper, children } = props
    return (<>
        <Grid container>
            <Grid item xs={12}>
                { paper || paper == undefined ? (
                    <Paper className={classes.contentBody}>
                        { children }
                    </Paper>
                ) : (
                    <div className={classes.contentBody}>
                        { children }
                    </div>
                )}
                
            </Grid>
        </Grid>

    </>)
}

export default ContentBody;