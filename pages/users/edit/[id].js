import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import { useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditUsersForm from '../../../components/users/EditUserForm'
import ChangeUserPasswordForm from '../../../components/users/ChangeUserPasswordForm'
import Alert from '../../../components/shared/Alert'
import TabPanel from '../../../components/shared/TabPanel'
import { getUserById } from '../../../includes/requests/users'

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const UsersEdit = (props) => {
    const { userData } = props

    const theme = useTheme()
    const router = useRouter()
    const [data, setData] = useState({})
    const [value, setValue] = React.useState(0) // tap selected value

    // for tab
    const tabsChangeHandle = (event, newValue) => {
        setValue(newValue);
    };

    // for SwipeableViews
    const tabsChangeIndexHandle = (index) => {
        setValue(index);
    };


    const responseHandle = (success, data) => {
        Alert({
            title: success ? 'Success' : 'Fail!',
            icon: success ? 'success' : 'error',
            text: success ? data.message : data.errors
        })
    }

    async function getDataById(id) {
        const token = userData.token
        const targetUserData = await getUserById(id, token)
        // console.log("...List Data ")
        // console.log(allHolidays.data.data)
        setData(targetUserData.data.data.user)
        //console.log(holidayData.data.data)
    }

    useEffect(() => {
        const id = router.query.id
        getDataById(id)
    }, [])


    return (
        <Layout>
            <ContentHeader title={'แก้ไขข้อมูลบัญชี'} />
            <ContentBody>
                <Paper square>
                    <Tabs
                        value={value}
                        onChange={tabsChangeHandle}
                        indicatorColor="primary"
                        textColor="primary"
                        aria-label="full width tabs example"
                    >
                        <Tab label="แก้ไขข้อมูลบัญชี" {...a11yProps(0)} />
                        <Tab label="แก้ไขรหัสผ่าน" {...a11yProps(1)} />
                    </Tabs>
                </Paper>
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {data ? (<EditUsersForm data={data} onResponses={responseHandle} />) : (<>{'loading..'}</>)}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {data ? (<ChangeUserPasswordForm data={data} onResponses={responseHandle} />) : (<>{'loading..'}</>)}
                </TabPanel>

            </ContentBody>
        </Layout>
    )
}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(UsersEdit);