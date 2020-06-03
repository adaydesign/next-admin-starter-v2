import React from 'react'
import Layout from '../../components/layouts/Layout'
import ContentHeader from '../../components/layouts/ContentHeader'
import ContentBody from '../../components/layouts/ContentBody'
import ListUsers from '../../components/users/ListUsers'


const Users = () => {

    return (
        <Layout>
            <ContentHeader title={'รายการผู้ใช้งาน - User'} />
            <ContentBody paper={false}>
                <ListUsers />
            </ContentBody>
        </Layout>
    )
}

export default Users