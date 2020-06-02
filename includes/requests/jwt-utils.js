import jwt from 'jsonwebtoken';

export const isExpiredToken = (token) => {
    let expire = true
    if (token != undefined) {
        const decoded = jwt.decode(token)
        const now = new Date().getTime()/1000
        if(decoded.exp != undefined){
            expire = now > decoded.exp
        }
        //console.log('check token is expire?')
        //console.log('exp : '+decoded.exp)
        //console.log('now : '+new Date().getTime()/1000)
        //console.log('live ? : '+( (new Date().getTime()/1000) <= decoded.exp))
    }

    return expire

}