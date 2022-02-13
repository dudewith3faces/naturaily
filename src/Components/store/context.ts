import { createContext, useContext } from 'react';
import { IContext, IState } from '../interface';

export const val = {
  user: {
    firstName: '',
    lastName: '',
    username: '',
  },
};

export const intialValue: IContext = {
  ...val,
  dispatch: (e) => {},
};
export const AppContext = createContext(intialValue);

// @ts-ignore
export const GetState = (): IState => useContext(AppContext).state as IState;
