import { NavLink } from 'react-router-dom';

const PublicNavItem = () => {
  return (
    <NavLink
      to="contacts"
      className="nav-list-item"
      activeClassName="active-nav-list-item"
    >
      Contacts
    </NavLink>
  );
};

export default PublicNavItem;
