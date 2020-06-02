// API URL
const API_URL = process.env.API_URL

// Axios Config
export const HEADER_NONE_AUTH = {
    "Content-Type": "application/json"
}

export const HEADER_WITH_AUTH = (token) => {
    return {
        ...HEADER_NONE_AUTH,
        "Authorization": `Bearer ${token}`
    }
}

export const HEADER_WITH_BASICAUTH = (auth) => {
    return {
        ...HEADER_NONE_AUTH,
        "Authorization": `Basic ${auth}`
    }
}


// Services
export const LOGIN_URI = `${API_URL}/login`
export const USER_URI = (id) => `${API_URL}/users` + `${id != undefined ? '/' + id : ''}`
export const OFFICE_URI = (id) => `${API_URL}/offices` + `${id != undefined ? '/' + id : ''}`
export const OFFICERTYPE_URI = (id) => `${API_URL}/typeOfficers` + `${id != undefined ? '/' + id : ''}`
export const ROLE_URI = (id) => `${API_URL}/roles` + `${id != undefined ? '/' + id : ''}`



