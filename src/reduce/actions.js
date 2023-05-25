import { LOGIN,LOGOUT,REGISTER } from "./constants"


export const setLogin = payload => {
  return {
    type:LOGIN,
    payload
  }
}

export const setLogout = () => {
  return {
    type:LOGOUT,
    
  }
}

export const setRegister = payload => {
  return {
    type: REGISTER,
    payload
  }
}