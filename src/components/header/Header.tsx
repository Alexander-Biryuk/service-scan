import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';
import HeaderAvatar from './HeaderAvatar';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt='logo' />
        <nav>
          <ul className={styles.header__menu}>
            <Link to='/' className={styles.header__menuItem}>Главная</Link>
            <li className={styles.header__menuItem}>Тарифы</li>
            <li className={styles.header__menuItem}>FAQ</li>
          </ul>
        </nav>
        <div className={styles.header__loginWrapper}>
          <div className={styles.header__login}>
            <button className={styles.header__registerButton}>
              Зарегистрироваться
            </button>
            <span className={styles.header__verticalLine}>|</span>
            <Link to='auth'>
              <button className={styles.header__loginButton}>Войти</button>
            </Link>
          </div>
        </div>
        {/* <HeaderAvatar /> */}
      </div>
    </header>
  );
}
