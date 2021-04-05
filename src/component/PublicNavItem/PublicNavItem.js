import { NavLink } from 'react-router-dom';
import './PublicNavItem.scss';

const PublicNavItem = () => {
  return (
    <ul className="list">
      <li className="nav-list__item">
        <NavLink
          to="contacts"
          className="nav-list__item-link"
          activeClassName="active-nav-list__item-link"
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
};

export default PublicNavItem;
