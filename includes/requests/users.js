import {USER_URI, HEADER_WITH_AUTH} from './constants'

const axios = require('axios');

export const getAllUsers = (token) => axios.get( USER_URI(), {headers:HEADER_WITH_AUTH(token)} );
export const getUserById = (uid, token) => axios.get( USER_URI(uid), {headers:HEADER_WITH_AUTH(token)} );
export const createNewUser = (token, data) => axios.post( USER_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editUser = (token, uid, data) => axios.put( USER_URI(uid), data, {headers:HEADER_WITH_AUTH(token)} );
export const deleteUser = (token, uid) => axios.delete( USER_URI(uid), {headers:HEADER_WITH_AUTH(token)} );