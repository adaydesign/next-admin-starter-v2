import { useRouter } from 'next/router';
import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux';
import Layout from '../../../components/layouts/Layout'
import ContentHeader from '../../../components/layouts/ContentHeader'
import ContentBody from '../../../components/layouts/ContentBody'
import EditUsersForm from '../../../components/users/EditUserForm'
import Alert from '../../../components/shared/Alert'
import { getUserById } from '../../../includes/requests/users'

const UsersEdit = (props) => {
    const {userData} = props
    const router = useRouter();
    const [data, setData] = useState({})

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
                {data ? (<EditUsersForm data={data} onResponses={responseHandle}/>) : (<>{'loading..'}</>)}
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