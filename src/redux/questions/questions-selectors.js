const gestTestName = state => state.tests.testActive;
const getUserAnswers = state => state.tests.question;
const getRandomQuestions = state => state.tests.randomQuestions;
const getIndex = state => state.tests.index;

export { gestTestName, getUserAnswers, getRandomQuestions, getIndex };
