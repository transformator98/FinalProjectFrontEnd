import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './questions-actions';

const testActiveReducer = createReducer('', {
  [action.technicalQA]: () => 'technical QA',
  [action.testingTheory]: () => 'testing theory',
  [action.removeRusult]: () => '',
});

const question = createReducer([], {
  // [action.addResult]: (state, { payload }) => [payload],
  [action.addResult]: (state, { payload }) => [
    ...state.filter(question => question.questionId !== payload.questionId),

    payload,
  ],
  [action.removeRusult]: () => [],
});

const randomQuestions = createReducer(null, {
  [action.addRandomQuestions]: (_, { payload }) => [...payload],
  [action.removeRusult]: () => null,
});

const index = createReducer(0, {
  [action.addIndex]: (state, { payload }) => state + payload,
  [action.removeRusult]: () => 0,
});
// const testActiveReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case TECHNICAL_QA:
//       return 'technical QA';

//     case TESTING_THEORY:
//       return 'testing theory';

//     default:
//       return state;
//   }
// };

// const question = (state = [], { type, payload }) => {
//   switch (type) {
//     case ADD_RESULT:
//       return [payload];
//     default:
//       return state;
//   }
// };

export default combineReducers({
  testActive: testActiveReducer,
  question: question,
  randomQuestions,
  index,
});

// ...state.map(question => {
//   if (question.questionId === payload.questionId) {
//     return { ...question, ...payload };
//   }
//   return payload;
// }),
