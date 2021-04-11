import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import styles from './Results.module.scss';
import Diagram from '../Diagram';
import {
  getResult,
  deleteResult,
} from '../../redux/questions/questions-operations';
import cat from './cat.svg';
import { connect } from 'react-redux';

const Results = () => {

  const tests = useSelector(state => state.tests);
  const testActive = useSelector(state => state.testActive);
  // const testActive = 'testing theory';
  const [result, setResult] = useState(null);

  const url = testActive === 'technical QA' ? 'technicalQA' : 'testingTheory';

  useEffect(() => {
    async function getUserResult() {
      try {
        const { data } = await getResult(tests, url);

        setResult(data);
      } catch (error) {
        console.error(error);
      }
    }
    getUserResult();
  }, [tests, url]);


  const handleTryAgain = e => {
    e.preventDefault();
    deleteResult();
  };


  return (
    <>
      {result !== null && (
        <div className={styles.wrapper}>
          <div className={styles.results}>
            <h1 className={styles.title}>Results</h1>
            <h2 className={styles.subtitle}>[ Testing theory_]</h2>
            <hr className={styles.line} />
            <Diagram />
            correct={result.correctAnswers} total={result.total}
          </div>
          <div className={styles.feedback}>
            <img src={cat} alt="cat" className={styles.image} />
            <h2 className={styles.feedbackTitle}>Not bad!</h2>
            <h3 className={styles.feedbackSubtitle}>
              But you still need to learn some materials.
            </h3>
            <button className={styles.button} onClick={handleTryAgain}>
              Try again
            </button>
          </div>
        </div>
      )}
    </>

  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteResult: () => dispatch(deleteResult()),
  };
};

export default connect(null, mapDispatchToProps)(Results);
