import { AxiosRequestHeaders } from 'axios';
import { InputType } from 'reactstrap/types/lib/Input';

export interface IContext extends IState {
  dispatch: React.Dispatch<IAction>;
}

export interface IState {
  user: IUser;
}

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
}

export interface ITextInput extends IOnChange, ILabel {
  type: InputType;
  value: string;
  placeholder: string;
  name: string;
}

interface IOnChange {
  onChange: (e: any) => void;
}

interface ILabel {
  label: string;
}

interface IOnClick {
  onClick: (e: any) => void;
}

export interface IButton extends IOnClick, ILabel {
  disabled: boolean;
}

export interface IHttpRequest {
  url: string;
  headers: AxiosRequestHeaders;
  method?: 'GET' | 'POST';
  body?: any;
  isFile?: boolean;
}

export interface IAction {
  type: 'ADD_TOKEN' | 'ADD_USER_DETAILS' | 'LOG_OUT';
  payload?: any;
}
