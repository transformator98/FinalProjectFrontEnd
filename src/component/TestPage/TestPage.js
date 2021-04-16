import { useState, useEffect } from 'react';
import s from './TestPage.module.scss';
import { getTests } from '../../service/serviceTests';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import questionActions from '../../redux/questions/questions-actions';
import Modal from './Modal';
import TestCard from './TestCard';
import NextPrevBtn from './NextPrevBtn';
import {
  gestTestName,
  getUserAnswers,
  getRandomQuestions,
  getIndex,
} from '../../redux/questions/questions-selectors';

export default function TestPage() {
  const [value, setValue] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  const testName = useSelector(gestTestName);
  const userAnswers = useSelector(getUserAnswers);
  const randomQuestions = useSelector(getRandomQuestions);
  const index = useSelector(getIndex);

  const dispatch = useDispatch();

  useEffect(() => {
    if (randomQuestions) {
      return;
    }

    if (testName === 'technical') {
      getTests('/tests/technical/random').then(tests =>
        dispatch(questionActions.addRandomQuestions(tests.data.tests)),
      );
    }
    getTests('/tests/theory/random').then(tests =>
      dispatch(questionActions.addRandomQuestions(tests.data.tests)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [randomQuestions, testName]);

  useEffect(() => {
    if (!randomQuestions) {
      return;
    }
    userAnswers.forEach(question => {
      if (question.questionId === randomQuestions[index].questionId) {
        setValue(question.userAnswer);
      }
    });
  }, [index, randomQuestions, userAnswers]);

  const finishTest = async () => {
    dispatch(questionActions.removeRusult());
  };

  return (
    <>
      {randomQuestions && (
        <section className={s.testsSection}>
          <div className={s.testHeaderWrapper}>
            <h2 className={s.testName}>{testName}</h2>

            <NavLink to="/" className={s.finishBtn} onClick={finishTest}>
              Finish test
            </NavLink>
          </div>
          <TestCard
            randomQuestions={randomQuestions}
            setValue={setValue}
            index={index}
            value={value}
          />
          <NextPrevBtn
            randomQuestions={randomQuestions}
            index={index}
            value={value}
            setValue={setValue}
            setModalActive={setModalActive}
          />
        </section>
      )}
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
