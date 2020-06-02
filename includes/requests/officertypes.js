import {OFFICERTYPE_URI, HEADER_WITH_AUTH, HEADER_NONE_AUTH} from './constants'

const axios = require('axios');

export const getAllOfficerTypes = () => axios.get( OFFICERTYPE_URI(), {headers:HEADER_NONE_AUTH} );
export const getOfficerTypeById = (token, id) => axios.get( OFFICERTYPE_URI(id), {headers:HEADER_NONE_AUTH} );
// export const createNewOfficerType = (token, data) => axios.post( OFFICERTYPE_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
// export const editOfficerType = (token, id, data) => axios.put( OFFICERTYPE_URI(id), data , {headers:HEADER_WITH_AUTH(token)} );
// export const deleteOfficerType = (token, id) => axios.delete( OFFICERTYPE_URI(id) , {headers:HEADER_WITH_AUTH(token)} );