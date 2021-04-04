import Logo from '../Logo';
import PublicNavItem from '../PublicNavItem';
import UserMenu from '../UserMenu';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <Logo />
      <UserMenu />
      <PublicNavItem />
    </nav>
  );
};

export default Navigation;
