import { NavLink } from 'react-router-dom';
import './UserMenu.scss';

const UserMenu = () => {
  return (
    <ul className="list nav-list">
      <li className="nav-list__item">
        <NavLink
          exact
          to="/"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink
          to="/useful-info"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Materials
        </NavLink>
      </li>
      <li className="nav-list__item">
        <NavLink
          to="/contacts"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default UserMenu;
