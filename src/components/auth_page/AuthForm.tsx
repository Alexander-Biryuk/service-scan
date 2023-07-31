import styles from './Auth.module.scss';
import { Formik, Form, Field } from 'formik';
import shortLine from '../../assets/Rectangle24.svg';
import longLine from '../../assets/Rectangle25.svg';
import google from '../../assets/Google.svg';
import facebook from '../../assets/Facebook.svg';
import yandex from '../../assets/Yandex.svg';
import { useAppDispatch } from '../../hooks';
import { getAccessToken } from './inputSlice';
import { useNavigate } from 'react-router-dom';

interface MyFormValues {
  login: string;
  password: string;
}

export default function MyForm() {
  const initialValues: MyFormValues = { login: '', password: '' };
  console.log(initialValues);
  const dispatch = useAppDispatch();
  const navigate= useNavigate();
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <div className={styles.formEnter}>Войти</div>
        <div className={styles.formRegister}>Зарегистрироваться</div>
      </div>
      <div className={styles.formLines}>
        <img src={shortLine} alt='line' />
        <img src={longLine} alt='line' />
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          dispatch(getAccessToken(values));
          console.log({ values, actions });
          // alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          navigate('/');
        }}
      >
        <Form className={styles.inputContainer}>
          <label className={styles.formLogin} htmlFor='login'>
            Логин или номер телефона:
          </label>
          <Field className={styles.formField} id='login' name='login' placeholder='login' />
          <label className={styles.formPassword} htmlFor='password'>
            Пароль:
          </label>
          <Field
            className={styles.formField}
            id='password'
            name='password'
            placeholder='password'
          />
          <button className={styles.formButton} type='submit' disabled={false}>
            Войти
          </button>
        </Form>
      </Formik>
      <div className={styles.formRestorePass}>Восстановить пароль</div>
      <div className={styles.formLogin}>Войти через:</div>
      <div className={styles.formSocials}>
        <img src={google} alt='google' />
        <img src={facebook} alt='facebook' />
        <img src={yandex} alt='yandex' />
      </div>
    </div>
  );
}
