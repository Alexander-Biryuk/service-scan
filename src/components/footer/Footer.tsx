import styles from './Footer.module.scss';
import logo from '../../assets/footer_logo.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <img src={logo} alt="logo" />
        <div className={styles.footer__contacts}>
          <p>г. Москва, Цветной б-р, 40<br/>+7 495 771 21 11<br/>info@skan.ru</p>
          <p>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  )
}