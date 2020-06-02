import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Router from 'next/router'
import MaterialTable from 'material-table';
// import useStyles from './style';
// import Alert from '../shared/Alert'
import Alert from '../../components/shared/Alert'

import { getAllUsers, deleteUser } from '../../includes/requests/users'

const ListUsers = (props) => {
    // const classes = useStyles();
    const { userData } = props
    const [data, setData] = useState([])

    const columns = [
        {
            field: "id",
            title: "รหัส",
            width: 50,
        },
        {
            field: "username",
            title: "ชื่อบัญชี"
        },
        {
            field: "name",
            title: "ชื่อ-นามสกุล"
        },
        {
            field: "office_name",
            title: "หน่วยงาน"
        },
        {
            field: "role_name",
            title: "role"
        },
        {
            field: "status_name",
            title: "สถานะ"
        },

    ];

    const actions = [
        {
            icon: 'edit',
            tooltip: 'แก้ไข',
            onClick: (event, rowData) => editDataHandle(event, rowData)
        },
        {
            icon: 'delete',
            tooltip: 'ลบ',
            onClick: (event, rowData) => deleteDataHandle(event, rowData)
        }
    ]

    const editDataHandle = (event, rowData) => {
        // alert("You edit " + rowData.id)
        Router.push('/users/edit/[id]', `/users/edit/${rowData.id}`)
    }

    const deleteDataHandle = (event, rowData) => {
        Alert(
            {
                title: 'คุณต้องการลบข้อมูลนี้หรือไม่ ?',
                text: `ชื่อรายการ ${rowData.username}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ใช่ ลบได้เลย',
                cancelButtonText: 'ยกเลิก'
            }, (result) => {
                if (result.value) {
                    console.log('delete : ' + rowData.id)

                    const token = userData.token
                    deleteUser(token, rowData.id).then(rs => {
                        getAllData()
                    })
                    .catch(err => {
                        alert(err)
                    })
                }
            })

    }

    const options = {
        headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
        },
    }


    async function getAllData() {
        const token = userData.token
        try {
            const allData = await getAllUsers(token)
            const usedData = allData.data.data.users.map(d =>{
                d.name = `${d.firstName} ${d.lastName}`
                d.office_name = d.office.name
                d.role_name = d.roles.map(r => r.name).join(',')
                d.status_name = d.status == 'A' ? "ปกติ" : "ยกเลิก"
                return d
            })
            
            // console.log("...List Data ")
            // console.log(usedData)
            setData(usedData)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getAllData()
    }, [])

    return (
        <>
            {/* {console.log(data)} */}
            {data.length > 0 ? (<MaterialTable
                title={"Users"}
                data={data}
                columns={columns}
                actions={actions}
                options={options}
            />) : (<>{'loading..'}</>)}

        </>
    )

}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(ListUsers);