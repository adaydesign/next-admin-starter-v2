import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'
import Select from "react-select";
import { connect } from 'react-redux';
import { useForm, Controller } from "react-hook-form";

import { Button, TextField, Divider, Grid, Typography }
    from '@material-ui/core';

import useStyles from '../../components/login/style';
import { createNewUser } from '../../includes/requests/users'
import { getAllOffices } from '../../includes/requests/offices'
import { getAllRoles } from '../../includes/requests/roles'
import { getAllOfficerTypes } from '../../includes/requests/officertypes'
// import { getDateYMDFormat } from '../../includes/lib/date-utils'

import BlockUi from 'react-block-ui';

const AddUserForm = (props) => {
    const { userData, onResponses } = props
    const classes = useStyles()

    const initValues = {
        username: "",
        password:"",
        title: "",
        firstName: "",
        lastName: "",
        email: "",
        position: "",
        officeID: 0,
        officerTypeID: 0,
        roles: [{ id: 0 }],
        status: "A"
    }
    const { register, handleSubmit, control, errors, reset } = useForm({defaultValues: initValues})

    const [showBlockUI, setShowBlockUI] = useState(true)
    // option
    var [officesOptions, setOfficesOptions] = useState([])
    var [rolesOptions, setRolesOptions] = useState([])
    var [typeOfficerOptions, settypeOfficerOptions] = useState([])

    const userStatusOptions = [{ value: 'A', label: 'ใช้งานปกติ (A)' }, { value: 'I', label: 'ระงับการใช้งาน (I)' }]

    const loadOfficesData = async () => {
        const result = await getAllOffices()
        // console.log('load office')
        // console.log(result.data.data.offices)
        if (result.data.data.offices != undefined) {
            const options = result.data.data.offices.map(o => {
                return {
                    value: o.id,
                    label: o.name
                }
            })
            // console.log(options)
            console.log('1. load office')
            setOfficesOptions(options)
        }
    }

    const loadRoleData = async () => {
        const result = await getAllRoles()
        if (result.data.data.roles != undefined) {
            // console.log(result.data.data.roles)
            const options = result.data.data.roles.map(o => {
                return {
                    value: o.id,
                    label: o.name
                }
            })
            // console.log(options)
            console.log('2. load role type')
            setRolesOptions(options)
        }
    }

    const loadOfficerTypeData = async () => {
        const result = await getAllOfficerTypes()
        if (result.data.data.typeOfficers != undefined) {
            // console.log(result.data.data.roles)
            const options = result.data.data.typeOfficers.map(t => {
                return {
                    value: t.id,
                    label: t.name
                }
            })
            // console.log(options)
            console.log('3. load officer type')
            settypeOfficerOptions(options)

            
        }
    }

    const allLoadData = async () => {
        await loadOfficesData()
        await loadRoleData()
        await loadOfficerTypeData()
        console.log('4. off block ui')
        setShowBlockUI(false)
    }

    useEffect(() => {
        allLoadData()
    }, [])

    const onSubmitHandle = async (formData) => {

        // console.log(formData)
        var roles = []
        if (formData.role != undefined) {
            roles = [{ "id": formData.role.value }]
        }
        var sendData = {
            ...formData,
            officeID: formData.office.value,
            officerTypeID: formData.typeOfficer.value,
            roles: roles,
            status: formData.status.value,
            createdUID: userData.id
        }

        // console.log('submit - send data')
        // console.log(sendData)
        // sendData.start_date = new Date(formData.start_date).toJSON()
        // sendData.end_date = new Date(formData.end_date).toJSON()

        const token = userData.token // localStorage.getItem('token')
        if (token) {
            try {
                const result = await createNewUser(token, sendData)
                // console.log(result)
                onResponses(true, { message: `เพิ่มข้อมูลแล้ว` })
            } catch (err) {
                console.log(err)
                // console.log(err.response);
                if (err.response != undefined && err.response.data != undefined) {
                    // console.log(err.response.data.message);
                    onResponses(false, { errors: err.response.data.message })
                } else {
                    onResponses(false, { errors: err })
                }
            }
        } else {
            // alert('Not found token')
            onResponses(false, { errors: 'User token not found' })
        }

    }

    return (
        <>
            <BlockUi tag="div" blocking={showBlockUI} renderChildren={false}>
                <form onSubmit={handleSubmit(onSubmitHandle)} className={classes.form} >
                    <Grid container direction="row" alignItems="flex-end" spacing={2}>
                        <Grid item md={2} >
                            <Typography>บัญชีและรหัสผ่าน</Typography>
                        </Grid>
                        <Grid item md={4} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                label="ชื่อบัญชี"
                                name="username"
                            />
                        </Grid>
                        <Grid item md={4} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                label="รหัสผ่าน"
                                name="password"
                                type="password"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-end" spacing={2}>
                        <Grid item md={2} >
                            <Typography>ชื่อ-นามสกุล</Typography>
                        </Grid>
                        <Grid item md={2} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                fullWidth
                                label="คำนำหน้า"
                                name="title"
                            />
                        </Grid>
                        <Grid item md={4} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                label="ชื่อ"
                                name="firstName"
                            />
                        </Grid>
                        <Grid item md={4} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                label="นามสกุล"
                                name="lastName"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-end" spacing={2} style={{ marginTop: '-20px' }}>
                        <Grid item md={2} >
                            <Typography>อีเมล</Typography>
                        </Grid>
                        <Grid item md={8} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                fullWidth
                                label="อีเมล"
                                name="email"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item md={2} >
                            <Typography>ประเภทตำแหน่งงาน</Typography>
                        </Grid>
                        <Grid item md={5} >
                            <Controller as={Select}
                                name="typeOfficer"
                                control={control}
                                isClearable={true}
                                options={typeOfficerOptions}
                                onChange={([selected]) => {
                                    return selected
                                }}
                                placeholder="เลือกประเภทตำแหน่ง"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="flex-end" spacing={2} style={{ marginTop: '-20px' }}>
                        <Grid item md={2} >
                            <Typography>ชื่อตำแหน่ง</Typography>
                        </Grid>
                        <Grid item md={8} >
                            <Controller as={TextField}
                                control={control}
                                margin="normal"
                                size="small"
                                fullWidth
                                label="ตำแหน่ง"
                                name="position"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item md={2} >
                            <Typography>หน่วยงาน</Typography>
                        </Grid>
                        <Grid item md={5} >
                            <Controller as={Select}
                                name="office"
                                control={control}
                                isClearable={true}
                                options={officesOptions}
                                onChange={([selected]) => {
                                    return selected
                                }}
                                placeholder="เลือกหน่วยงาน"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item md={2} >
                            <Typography>สิทธิ์การใช้งาน</Typography>
                        </Grid>
                        <Grid item md={5} >
                            <Controller as={Select}
                                name="role"
                                control={control}
                                isClearable={true}
                                options={rolesOptions}
                                onChange={([selected]) => {
                                    return selected
                                }}
                                placeholder="เลือกสิทธิ์การใช้งาน"
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" alignItems="center" spacing={2}>
                        <Grid item md={2} >
                            <Typography>สถานะของบัญชี</Typography>
                        </Grid>
                        <Grid item md={5} >
                            <Controller as={Select}
                                name="status"
                                control={control}
                                isClearable={true}
                                options={userStatusOptions}
                                onChange={([selected]) => {
                                    return selected
                                }}
                                placeholder="เลือกสถานะของบัญชี"
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} justify="center" style={{ marginTop: '20px' }}>
                        <Grid item md={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >บันทึก</Button>
                        </Grid>
                        <Grid item md={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                                onClick={() => { reset() }}
                            >รีเซ็ตฟอร์ม</Button>
                        </Grid>
                        
                    </Grid>
                </form>
            </BlockUi>
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

export default connect(mapStateToProps)(AddUserForm);