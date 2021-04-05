import { createPortal } from 'react-dom';
// import Button from '../Button';
// import Logo from '../Logo';
// import { ReactComponent as CloseModalBtn } from './close-modal-btn.svg';
import './Modal.scss';

const Modal = ({ children }) => {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div className="modal__backdrop">
      <div className="modal__content">{children}</div>
    </div>,
    modalRoot,
  );

  //   return createPortal(
  //     <div className="modal__backdrop">
  //       <div className="modal__content">
  //         <div className="modal-header">
  //           <div className="modal-header__logo">
  //             <Logo />
  //           </div>
  //           <Button
  //             className="site-header__button"
  //             children={<CloseModalBtn />}
  //           />
  //         </div>
  //         {children}
  //       </div>
  //     </div>,
  //     modalRoot,
  //   );
};

export default Modal;
