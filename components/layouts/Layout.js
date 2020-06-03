import React, { useEffect } from 'react'
import Router from 'next/router'
import { connect, useDispatch } from 'react-redux';
import { saveLoginUser, clearUserData } from '../../includes/lib/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderAppBar from './Header'
import SidebarDrawer from './Sidebar'
import Footer from './Footer'
import useStyles from './style'
import { isExpiredToken } from '../../includes/requests/jwt-utils'

const Layout = (props) => {
    const classes = useStyles()

    const { userData, children } = props;

    // // redux dispatch
    const dispatch = useDispatch();

    const clearUserLocalData = () => {
        if(userData.loginSuccess){
            // clear user data
            dispatch(clearUserData())
        }

        // clear localstorage
        if (localStorage.getItem('user') && localStorage.getItem('token')) {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
        }

    }
    const logoutHandle = () => {
        // clear
        clearUserLocalData()
        // redirect
        // console.log(Router.pathname)
        if (Router.pathname != "/") {
            Router.push('/')
        }
    }

    const checkUserIsLogin = () => {
        let userLogin = false
        //console.log('Lets check user data exist')
        // if not store data in redux but have data in localstorage
        // put data in localstorage to redux
        if (typeof window !== 'undefined') {
            const userLocal = localStorage.getItem('user')
            const tokenLocal = localStorage.getItem('token')

            // if have data if localStorage
            if (userLocal && tokenLocal) {
                //console.log('have data in local storage')

                // check token not expire
                if (!isExpiredToken(tokenLocal)) {
                    // dump data to redux store
                    // console.log('user login :' + userData.loginSuccess)
                    if (!userData.loginSuccess) {
                        // console.log('dump data to redux store')
                        dispatch(saveLoginUser(JSON.parse(userLocal), tokenLocal))
                    }

                    userLogin = true
                } else {
                    // console.log('token is expired ..')
                    // clear
                    clearUserLocalData()
                    // redirect
                    if (Router.pathname != "/") {
                        Router.push('/')
                    }
                }

            } else {
                //console.log('do not have user data in local storage')
                //console.log('clear redux store')
                // clear
                clearUserLocalData()
                // redirect
                //console.log('path name: '+Router.pathname)
                if (Router.pathname != "/") {
                    Router.push('/')
                }
            }
        }

        return userLogin

    }

    return (
        <>
            <div className={classes.root}>
                <CssBaseline />
                {checkUserIsLogin() ? (
                    <>
                        <HeaderAppBar logoutHandle={logoutHandle} />
                        <SidebarDrawer />
                    </>) : <>
                        <HeaderAppBar />
                    </>}
                <main className={classes.content}>
                    <Toolbar />
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    // console.log('map state to props')
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(Layout);

