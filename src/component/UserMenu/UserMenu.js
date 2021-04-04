import { NavLink } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = () => {
  return (
    <ul className="list nav-list">
      <NavLink
        exact
        to="/"
        className="nav-list-item"
        activeClassName="active-nav-list-item"
      >
        Home
      </NavLink>
      <NavLink
        to="/useful-info"
        className="nav-list-item"
        activeClassName="active-nav-list-item"
      >
        Materials
      </NavLink>
      <NavLink
        to="/contacts"
        className="nav-list-item"
        activeClassName="active-nav-list-item"
      >
        Contacts
      </NavLink>
    </ul>
  );
};

export default UserMenu;
