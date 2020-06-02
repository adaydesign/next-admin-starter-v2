import {ROLE_URI, HEADER_WITH_AUTH, HEADER_NONE_AUTH} from './constants'

const axios = require('axios');

export const getAllRoles = () => axios.get( ROLE_URI(), {headers:HEADER_NONE_AUTH} );

// export const getWorkdayById = (token, id) => axios.get( WORKDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );
// export const createNewWorkday = (token, data) => axios.post( WORKDAY_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
// export const editWorkday = (token, id, data) => axios.put( WORKDAY_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
// export const deleteWorkday = (token, id) => axios.delete( WORKDAY_URI(id), {headers:HEADER_WITH_AUTH(token)} );

