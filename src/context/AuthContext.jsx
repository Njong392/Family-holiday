import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_HOSTS':
        return{
            ...state,
            hosts: action.payload
        }
    // case 'GET_HOST':
    //   return {
    //     ...state,
    //     host: action.payload
        
    //   }
    case 'SET_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      }
    case 'UPDATE_USER_DETAILS':
      return {
        ...state,
        userDetails: action.payload,
      }
    case 'LOGOUT':
      return {
        ...state,
        userDetails: null,
        user: null,
        hosts: null,
      }

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    userDetails: null,
    hosts: null,
  });

  //TODO: use cookies instead of localStorage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      dispatch({ type: 'LOGIN', payload: user });
      
    }
  }, []);

  console.log('AuthContext state', state);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
