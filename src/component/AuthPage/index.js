import AuthForm from '../AuthForm/index';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  return (
    <>
      <div>
        <p>
          [ We will help you find weak points in knowledge so that you can
          strengthen it. We will show you what is relevant to know for a QA
          Engineer and will try to make the learning process more diverse_ ]
        </p>
      </div>
      <div>
        <AuthForm />
      </div>
    </>
  );
}
