import {LOGIN_URI, HEADER_NONE_AUTH} from './constants'

const axios = require('axios');

export const postLogin = (data) => axios.post(LOGIN_URI, data, {HEADER_NONE_AUTH});