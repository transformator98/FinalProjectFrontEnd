import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button';
import Modal from '../Modal';
import Navlinks from '../NavLinks';
import { toggleModalAction } from '../../redux/modal/action';
import { getModalStatus } from '../../redux/modal/selectors';
import { ReactComponent as MobileMenuBtn } from '../../icon/open-mobile-menu-btn.svg';
import { ReactComponent as CloseMenuBtn } from '../../icon/close-moile-menu.svg';
import { ReactComponent as SignOutIcon } from '../../icon/sign-out.svg';
import './Header.scss';
import { authOperations } from 'redux/auth';

const Header = ({ children }) => {
  const value = useSelector(getModalStatus);
  const dispatch = useDispatch();

  function onToggleModal() {
    dispatch(toggleModalAction(value));
  }

  function closeLogout() {
    dispatch(authOperations.logout());
    onToggleModal();
  }

  return (
    <>
      <header className="site-header">
        {children}
        {!value ? (
          <Button
            className="site-header__button"
            children={<MobileMenuBtn />}
            onClick={onToggleModal}
          />
        ) : (
          <Button
            className="site-header__button"
            children={<CloseMenuBtn />}
            onClick={onToggleModal}
          />
        )}
        {value && (
          <Modal>
            <Navlinks />
            <div className="sign-out-btn-wrapper">
              <Button
                className="modal-sign-out-btn"
                children={<SignOutIcon />}
                onClick={closeLogout}
              ></Button>
            </div>
          </Modal>
        )}
      </header>
    </>
  );
};

export default Header;
