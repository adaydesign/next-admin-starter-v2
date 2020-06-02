import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  loginSuccess: false,
  id:0,
  username: '',
  fullName: '',
  gender: 0,
  roleId: 0,
  officeName: '',
  token:''
}

export const actionTypes = {
  SAVE: 'SAVE',
  DESTROY: 'DESTROY',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  // console.log('action type : '+action.type)
  switch (action.type) {
    case actionTypes.SAVE:

      // set gender
      let gender = 0
      if(action.data.title=="นาย"){
        gender = 1
      }else if(action.data.title=="นาง" || action.data.title=="นางสาว"){
        gender = 2
      }

      return {
        loginSuccess: true,
        id: action.data.id,
        username: action.data.username,
        fullName: `${action.data.firstName} ${action.data.lastName}`,
        gender: gender,
        roleId: action.data.roles,
        officeName: action.data.office.name,
        token: action.token
      };
    case actionTypes.DESTROY:
      return exampleInitialState;
    default:
      return state
  }
}

export const saveLoginUser = (userData, token)=>{
    return {type: actionTypes.SAVE, data: userData, token: token}
}

export const clearUserData = ()=>{
    return {type: actionTypes.DESTROY}
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
