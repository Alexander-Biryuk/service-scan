import styles from './Header.module.scss';
import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <img src={logo} alt='logo' />
        <nav>
          <ul className={styles.header__menu}>
            <li className={styles.header__menuItem}>Главная</li>
            <li className={styles.header__menuItem}>Тарифы</li>
            <li className={styles.header__menuItem}>FAQ</li>
          </ul>
        </nav>
        <div className={styles.header__login}>
          <button className={styles.header__registerButton}>Зарегистрироваться</button>
          <span className={styles.header__verticalLine}>|</span>
          <button className={styles.header__loginButton}>Войти</button>
        </div>
      </div>
    </header>
  );
}
