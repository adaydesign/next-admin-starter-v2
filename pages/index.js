import React from 'react'
import { Grid } from '@material-ui/core'
import Layout from '../components/layouts/Layout'
import CoverPhoto from '../components/Index/CoverPhoto'

const IndexPage = (props) => {
    const { a } = props;
    return (<>
        <Layout>
            <Grid container direction="column" alignItems="center">
                <Grid item md={8}>
                    <h1>Welcome to Index Page {a}</h1>
                </Grid>
                <Grid item md={7}>
                    <CoverPhoto />
                </Grid>
            </Grid>
        </Layout>
    </>)
}

export default IndexPage