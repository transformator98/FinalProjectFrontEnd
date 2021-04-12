import { createAction } from '@reduxjs/toolkit';

const technicalQA = createAction('questions/technicalQA');

const testingTheory = createAction('questions/testingTheory');

const addResult = createAction('questions/results', (testId, testValue) => ({
  payload: {
    questionId: testId,
    answers: testValue,
  },
}));

const removeRusult = createAction('questions/removeRusult');

const addRandomQuestions = createAction('questions/addRandomQuestions');

const addIndex = createAction('questions/addIndex');

const actions = {
  addIndex,
  technicalQA,
  testingTheory,
  addResult,
  removeRusult,
  addRandomQuestions,
};

export default actions;
