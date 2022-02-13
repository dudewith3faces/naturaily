import { Link } from 'react-router-dom';
import { Paths } from '../enums';
import { CookieService } from '../services';
import { GetState } from '../store';

export const Header = () => {
  const {
    user: { firstName, lastName },
  } = GetState();
  const { removeToken } = CookieService();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand">Naturaily</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link">
              Welcome, {`${firstName} ${lastName}`}
            </div>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to={Paths.DASHBOARD}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={Paths.LOGIN} onClick={removeToken}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
