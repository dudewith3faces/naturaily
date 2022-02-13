import { Button, TextInput } from '../common';
import { LoginService } from '../services';

export const Login = () => {
  const { state, isDisabled, onChange, onSubmit, error } = LoginService();
  const inputs = [
    {
      type: 'text',
      label: 'Username',
      name: 'username',
      value: state.username,
      onChange: onChange,
      placeholder: 'admin',
    },
    {
      name: 'password',
      type: 'password',
      label: 'Password',
      value: state.password,
      onChange: onChange,
      placeholder: 'password',
    },
    // @ts-ignore
  ].map((data) => <TextInput key={data.label} {...data} />);
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                  </div>
                </div>
                {error ? <div className="invalid-feedback">{error}</div> : null}
                <form className="signin-form">
                  {inputs}
                  <Button
                    label="Sign In"
                    onClick={onSubmit}
                    disabled={isDisabled}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
