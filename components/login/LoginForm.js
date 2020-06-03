import React from 'react'

import jwt from 'jsonwebtoken';
// import { Formik } from "formik";
import { useForm, Controller } from "react-hook-form";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert'
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import useStyles from '../../components/login/style';

import { useDispatch } from 'react-redux';
import { getUserById } from '../../includes/requests/users';
import { saveLoginUser } from '../../includes/lib/store';
import { postLogin } from '../../includes/requests/login';
// import { USER_URI } from '../../includes/requests/constants'

const LoginForm = (props) => {
    const classes = useStyles();
    // const initialValues = { username: "xxxx", password: "xx" }
    const { handleSubmit, control, errors } = useForm();

    const { onResponses, onBeginSubmit } = props;
    // redux dispatch
    const dispatch = useDispatch();

    const onSubmitHandle = async (data) => {
        onBeginSubmit(true)
        
        try {
            const response = await postLogin(data)
            // console.log("--login finish--")
            // console.log(response.data)
            if (response.data != undefined && response.data.token != undefined) {
                const token = response.data.token
                const decoded = jwt.decode(token)
                // console.log(decoded.slug)
                // console.log(USER_URI(decoded.id))
                const responsGetUser = await getUserById(decoded.id, token)
                // console.log(responsGetUser.data)

                if (responsGetUser.data != undefined && responsGetUser.data.success) {
                    // user data
                    const userData = responsGetUser.data.data.user
                    // console.log("data")
                    // console.log(responsGetUser.data.data)
                    // store user data to redux
                    dispatch(saveLoginUser(userData, token))
                    // session
                    localStorage.setItem("user", JSON.stringify(userData))
                    localStorage.setItem("token", token)
                    onResponses(true, { user_fullname: `${userData.firstName} ${userData.lastName}` })
                } else {
                    onResponses(false, { errors: 'can not get user data' })
                }

            } else {
                onResponses(false, { errors: 'invalid response data and token' })
            }

        } catch (err) {
            // console.log("--error--")
            // console.log(err)
            // console.log(err.response);
            if (err.response != undefined && err.response.data != undefined) {
                // console.log(err.response.data.message);
                onResponses(false, { errors: err.response.data.message })
            } else {
                onResponses(false, { errors: err })
            }
        }
    }

   
    return (
        <form onSubmit={handleSubmit(onSubmitHandle)} className={classes.form}>
            <Controller as={TextField}
                control={control}
                variant="outlined"
                margin="normal"
                fullWidth
                label="ชื่อผู้ใช้งาน"
                name="username"
                autoFocus
                rules={{ required: true }}
            />
            {errors.username && <Alert severity="error">Username is required</Alert>}
            <Controller as={TextField}
                control={control}
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                rules={{ required: true }}
            />
            {errors.password && <Alert severity="error">Password is required</Alert>}
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >เข้าสู่ระบบ</Button>
        </form>

    )
}


export default LoginForm