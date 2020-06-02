import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import AddUserForm from '../../components/users/AddUserForm'
import Alert from '../../components/shared/Alert'

const UsersAdd = () => {

    const responseHandle = (success, data) => {
        Alert({
            title: success ? 'Success' : 'Fail!',
            icon: success ? 'success' : 'error',
            text: success ? data.message : data.errors
        })
    }

    return (
        <Layout>
            <ContentHeader title={'เพิ่มบัญชีผู้ใช้งาน'} />
            <ContentBody>
                <AddUserForm onResponses={responseHandle}/>
            </ContentBody>
        </Layout>
    )
}

export default UsersAdd