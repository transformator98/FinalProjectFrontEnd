import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import React, { useEffect, useState } from 'react';
import { ReactComponent as SignOutIcon } from '../../icon/sign-out.svg';
import styles from './styles.module.scss';
import operations from '../../redux/auth/auth-operations';
import Button from '../Button';

function AuthHav() {
  const [name, setName] = useState();
  const [avatarUrl, setAvatarUrl] = useState();
  const dispatch = useDispatch();
  const userAvatar = useSelector(authSelectors.getUserAvatar);
  const userName = useSelector(authSelectors.getUsername);

  useEffect(() => {
    try {
      setName(userName);
      setAvatarUrl(userAvatar);
    } catch (error) {
      console.log(error);
    }
  }, [userName, userAvatar]);

  const handleLogOut = () => {
    dispatch(operations.logout());
  };

  return (
    <div className={styles.authNav}>
      <div className={styles.authAvatarNameContainer}>
        <div className={styles.avatarWarpper}>
          <img
            className={styles.avatar}
            src={avatarUrl}
            alt="avatar"
            width="30"
            height="30"
          />
        </div>
        <span className={styles.name}>{name}</span>
      </div>

      <Button
        children={<SignOutIcon />}
        className={styles.signOutButton}
        // onClick={}
      />
      {/* <buttom className={styles.signOutIconWrapper} onClick={handleLogOut}>
        <img
          className={styles.signOutIcon}
          src={icon}
          alt="sign-out"
          width="16"
          height="16"
        />
      </button> */}
    </div>
  );
}

export default AuthHav;
