import styles from './Auth.module.scss';
import picture from '../../assets/Characters.svg';
import { Formik } from 'formik';
import MyForm from './Form';

export default function Auth() {
  return (
    <div className={styles.container}>
      <div className={styles.headerAndPicture}>
        <div className={styles.header}>
          <h1>Для оформления подписки на тариф, необходимо авторизоваться.</h1>
        </div>
        <div className={styles.picture}>
            <img src={picture} alt="characters" />
        </div>
      </div>
      <div className={styles.form}>
        <MyForm />
      </div>
    </div>
  );
}
