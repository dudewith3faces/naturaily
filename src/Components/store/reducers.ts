import { useContext, useReducer } from 'react';
import { AppContext } from '.';
import { IContext, IAction, IUser } from '../interface';
import { intialValue, val } from './context';

export const ReducerService = () => {
  const appReducer = (state: IContext, action: IAction): IContext => {
    switch (action.type) {
      case 'ADD_USER_DETAILS':
        return { ...state, user: action.payload };
      case 'LOG_OUT':
        return { ...state, user: val.user };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(appReducer, intialValue);

  return { state, dispatch };
};

export const Dispatches = () => {
  const { dispatch } = useContext(AppContext);

  const logout = () => dispatch({ type: 'LOG_OUT' });

  const addUserDetails = (data: IUser) =>
    dispatch({ type: 'ADD_USER_DETAILS', payload: data });

  return { logout, addUserDetails };
};
