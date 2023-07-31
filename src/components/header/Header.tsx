import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import HeaderAvatar from './HeaderAvatar';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {useEffect} from 'react';
import { getInfo } from '../auth_page/infoSlice';

export default function Header() {
  const accessToken = useAppSelector((state) => state.input.accessToken);
  const dispatch = useAppDispatch();
  
  // const info = useAppSelector(state => state.input.)
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt='logo' />
        <nav>
          <ul className={styles.header__menu}>
            <Link to='/' className={styles.header__menuItem}>
              Главная
            </Link>
            {/* <li className={styles.header__menuItem}>Тарифы</li> */}
            <Link to='results' className={styles.header__menuItem}>
              Тарифы
            </Link>
            <li className={styles.header__menuItem}>FAQ</li>
          </ul>
        </nav>
        <div className={styles.header__loginWrapper}>
          {accessToken ? (
            <HeaderAvatar />
          ) : (
            <div className={styles.header__login}>
              <button className={styles.header__registerButton}>Зарегистрироваться</button>
              <span className={styles.header__verticalLine}>|</span>
              <Link to='auth'>
                <button className={styles.header__loginButton}>Войти</button>
              </Link>
            </div>
          )}
        </div>
        {/* <HeaderAvatar /> */}
      </div>
    </header>
  );
}
