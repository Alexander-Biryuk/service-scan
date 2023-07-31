import styles from './Header.module.scss';
import avatar from '../../assets/avatar.png';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../auth_page/inputSlice';
import {useEffect} from 'react';
import { getInfo } from '../auth_page/infoSlice';

export default function HeaderAvatar() {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(state => state.input.accessToken);
  useEffect(() => {
    accessToken && dispatch(getInfo(accessToken));
  }, [dispatch]);
  const info = useAppSelector(state => state.info.eventFiltersInfo)
  
  return (
    <div className={styles.header__avatarContainer}>
      <div className={styles.header__info}>
        <div className={styles.header__usedCompanies}>
          <p className={styles.usedCompanies}>Использовано компаний</p>
          <p className={styles.limit}>Лимит по компаниям</p>
        </div>
        <div className={styles.header__numbers}>
          <p>{info.usedCompanyCount}</p>
          <p style={{color: '#8AC540'}}>{info.companyLimit}</p>
        </div>
      </div>
      <div className={styles.header__avatar}>
        <div className={styles.header__name}>
          Алексей А.
          <br />
          <span onClick={() => dispatch(logout())}>Выйти</span>
        </div>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}
