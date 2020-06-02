import {OFFICE_URI, HEADER_WITH_AUTH, HEADER_NONE_AUTH} from './constants'

const axios = require('axios');

export const getAllOffices = () => axios.get( OFFICE_URI()+'?pageSize=500', {headers:HEADER_NONE_AUTH} );
export const getOfficeByCourtCode = (token, court_code) => axios.get( OFFICE_URI(court_code), {headers:HEADER_WITH_AUTH(token)} );
export const createNewOffice = (token, data) => axios.post( OFFICE_URI(), data , {headers:HEADER_WITH_AUTH(token)} );
export const editOffice = (token, court_code, data) => axios.put( OFFICE_URI(court_code), data , {headers:HEADER_WITH_AUTH(token)} );
export const deleteOffice = (token, id) => axios.delete( OFFICE_URI(id), {headers:HEADER_WITH_AUTH(token)} );


// import useSWR from 'swr'
// import fetch from '../lib/fetch'

// export const useOffices = (token) => {
//   return useSWR([OFFICE_URI(), {headers:HEADER_WITH_AUTH(token)} ], fetch)
// }
