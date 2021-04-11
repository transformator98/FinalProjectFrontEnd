import { Route } from 'react-router';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import MainPageView from '../MainPageView';
import { getLoggedIn } from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import './Google.scss';

const Google = () => {
  const history = useHistory();
  const location = useLocation();
  const isLoggedIn = useSelector(getLoggedIn);
  const dispatch = useDispatch();
  const accessToken = new URLSearchParams(location.search).get('accessToken');
  console.log(accessToken);

  function requestToMongo() {
    dispatch(authOperations.requestToMongo(accessToken));
  }

  requestToMongo();

  if (accessToken) {
    history.push('/');
  }

  return (
    <Route to="/" component={() => <MainPageView authorized={isLoggedIn} />} />
    // <section>
    //   <p className="google-text">GOOGLE_AUTH_VIEW</p>
    // </section>
  );
};

export default Google;
