import s from './Modal.module.scss';
import { getResult } from '../../../service/serviceTests';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Modal({ active, setActive }) {
  const testName = useSelector(state => state.tests.testActive);
  const userAnswers = useSelector(state => state.tests.question);

  const sendAnswers = () => {
    if (testName === 'technical') {
      getResult('technical', userAnswers);
    } else {
      getResult('theory', userAnswers);
    }
  };

  const closeModal = () => {
    setActive(false);
  };
  return (
    <div
      className={active ? s.modal__active : s.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? s.modal_content__active : s.modal_content}
        onClick={e => e.stopPropagation()}
      >
        <p className={s.modalInfo}>
          Congratulations, you have finished the test! We sent report with
          details to your email. Please press 'ok' to continue
        </p>
        <div className={s.btnWrapper}>
          <button onClick={closeModal} className={s.modalBtn}>
            Cancel
          </button>
          <NavLink to="/result" onClick={sendAnswers} className={s.modalBtn}>
            Ок
          </NavLink>
        </div>
      </div>
    </div>
  );
}
