import { LOGIN,LOGOUT } from "./constants"

export const initState = {
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) ||null
}

const reducer = (state,action) => {
  let newState;

  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload.token|| null);
      localStorage.setItem('user', JSON.stringify(action.payload.user) || null);
      newState = {
        ...state,
        user: action.payload.user,
        token: action.payload.token
      }
      break;
    case LOGOUT:
      localStorage.setItem('token', null);
      localStorage.setItem('user', null);
      newState = {
        ...state,
        user:null,
        token:null,
      };
      break;
      default:
        throw new Error(`Invalid action ${action.type}`)
  } 
  return newState
}

export default reducer;