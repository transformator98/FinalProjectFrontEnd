import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import './Google.scss';

const Google = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = new URLSearchParams(location.search).get('accessToken');
  console.log(accessToken);

  function requestToMongo() {
    dispatch(authOperations.requestToMongo(accessToken));
  }

  requestToMongo();

  return (
    <section>
      <p className="google-text">GOOGLE_AUTH_VIEW</p>
    </section>
  );
};

export default Google;
