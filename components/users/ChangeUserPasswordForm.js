import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import Link from 'next/link'
import Router from 'next/router'
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";

import { Button, TextField, Divider, Grid, Typography }
    from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'

import useStyles from '../../components/login/style';
import { changeUserPassword } from '../../includes/requests/users'
// import { getDateYMDFormat } from '../../includes/lib/date-utils'
// import BlockUi from 'react-block-ui';

const ChangeUserPasswordForm = (props) => {
    const { userData, onResponses, data } = props

    const classes = useStyles()
    const { handleSubmit, control, errors } = useForm()

    // console.log('edit form')
    // console.log(data)
    const initValues = {
        id: data.id,
        username: data.username
    }
    console.log('init values')
    console.log(initValues)

    const onSubmitHandle = async (formData) => {
        // console.log(formData)

        var sendData = {
            ...formData,
            updatedUID: userData.id
        }

        const token = userData.token //localStorage.getItem('token')
        if (token) {
            try {
                const result = await changeUserPassword(token, sendData.id, sendData)
                console.log(result)
                onResponses(true, { message: `แก้ไขข้อมูลแล้ว` })
            } catch (err) {
                // console.log(err)
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
            <form onSubmit={handleSubmit(onSubmitHandle)} className={classes.form} >
                <Grid container direction="row" alignItems="flex-end" spacing={2}>
                    <Grid item md={2} >
                        <Typography>บัญชีผู้ใช้</Typography>
                    </Grid>
                    <Grid item md={2} >
                        <Controller as={TextField}
                            control={control}
                            margin="normal"
                            size="small"
                            type="number"
                            disabled
                            required
                            fullWidth
                            label="รหัส"
                            name="id"
                            defaultValue={initValues.id}
                        />
                    </Grid>
                    <Grid item md={3} >
                        <Controller as={TextField}
                            control={control}
                            margin="normal"
                            size="small"
                            disabled
                            required
                            fullWidth
                            label="ชื่อบัญชี"
                            name="username"
                            defaultValue={initValues.username}
                        />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="flex-end" spacing={2}>
                    <Grid item md={2} >
                        <Typography>แก้ไขรหัสผ่าน</Typography>
                    </Grid>
                    <Grid item md={4} >
                        <Controller as={TextField}
                            control={control}
                            margin="normal"
                            size="small"
                            type="password"
                            fullWidth
                            label="รหัสผ่านเดิม"
                            name="current_password"
                            rules={{ required: true }}
                        />
                        {errors.current_password && <Alert severity="error">Current Password is required</Alert>}
                    </Grid>
                    <Grid item md={4} >
                        <Controller as={TextField}
                            control={control}
                            margin="normal"
                            size="small"
                            type="password"
                            fullWidth
                            label="รหัสผ่านใหม่"
                            name="new_password"
                            rules={{ required: true }}
                        />
                        {errors.new_password && <Alert severity="error">New Password is required</Alert>}
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
                        <Link href="/users">
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >กลับไปยังรายการ</Button>
                        </Link>
                    </Grid>
                </Grid>
            </form>
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

export default connect(mapStateToProps)(ChangeUserPasswordForm);