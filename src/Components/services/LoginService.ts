import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { string, object, ValidationError } from 'yup';
import { loginRequest } from './api';
import { Paths } from '../enums';
import { CookieService } from '.';

const loginValidation = async (user: {
  username: string;
  password: string;
}) => {
  try {
    const schema = object({
      username: string().required(),
      password: string().required(),
    });
    await schema.validate(user, { strict: true });
  } catch (error) {
    if (error instanceof ValidationError) throw new Error(error.message);
    else if (error instanceof Error) throw new Error(error.message);
  }
};

export const LoginService = () => {
  const defaultState = { username: '', password: '' };
  const [state, setState] = useState(defaultState);
  const [error, setError] = useState('');
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { setToken } = CookieService();

  const onChange = ({
    target: { name, value },
  }: {
    target: { value: string; name: string };
  }) => {
    setState({ ...state, [name]: value });
    setError('');
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await loginValidation(state);
    if (error) return;
    setDisabled(true);
    try {
      const token = await loginRequest(state);
      setToken(token);
      navigate(Paths.DASHBOARD);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setDisabled(false);
    }
  };

  return { state, isDisabled, onChange, onSubmit, error };
};
