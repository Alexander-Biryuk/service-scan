import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './Query.module.scss';

export default function MyQueryForm() {
  return (
    <Formik
      initialValues={{
        inn: '',
        tonality: '',
        docsNumber: '',
        range1: '',
        range2: '',
        check1: true,
        check2: true,
        check3: true,
        check4: false,
        check5: false,
        check6: true,
        check7: false,
      }}
      validationSchema={Yup.object({
        inn: Yup.string().max(12, 'must be 12 characters or less').required('Required'),
        docsNumber: Yup.number()
          .min(1, 'введите число >= 1')
          .max(1000, 'введите число < 1000')
          .required('Required'),
        range1: Yup.date().required('Required'),
        range2: Yup.date().required('Required')
        // check: Yup.boolean().isTrue('need checked').required('Required'),
      })}
      onSubmit={(value, { setSubmitting }) => {
        console.log(value);
        // console.log(formik.errors.firstName);
        // console.log(formik.errors.email);
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <div className={styles.fieldContainer}>
            <label className={styles.inn} htmlFor='inn'>
              <p>
                ИНН компании<sup>*</sup>
              </p>
              <Field name='inn' type='text' className={styles.innField} />
              <ErrorMessage name='inn'>{msg => <div className={styles.errorMessageInn}>{msg}</div>}</ErrorMessage>
            </label>

            <label className={styles.tonality} htmlFor='tonality'>
              Тональность
              <Field name='tonality' as='select' className={styles.innField}>
                <option value='любая'>любая</option>
                <option value='позитивная'>позитивная</option>
                <option value='негативная'>негативная</option>
              </Field>
              <ErrorMessage name='tonality' />
            </label>

            <label className={styles.docsNumber} htmlFor='docsNumber'>
              <p>
                Количество документов в выдаче<sup>*</sup>
              </p>
              <Field
                name='docsNumber'
                type='text'
                className={styles.innField}
                placeholder='от 1 до 1000'
              />
              <ErrorMessage name='docsNumber'>{msg => <div className={styles.errorMessageDocs}>{msg}</div>}</ErrorMessage>
            </label>

            <div className={styles.rangeContainer}>
              <label className={styles.inn} htmlFor='range' style={{ marginBottom: '20px' }}>
                <p>
                  Диапазон поиска<sup>*</sup>
                </p>
              </label>
              <div className={styles.range}>
                <Field name='range1' type='text' className={styles.rangeField} />
                <ErrorMessage name='range1'>{msg => <div className={styles.errorMessageRange1}>{msg}</div>}</ErrorMessage>
                <Field name='range2' type='text' className={styles.rangeField} />
                <ErrorMessage name='range2'>{msg => <div className={styles.errorMessageRange2}>{msg}</div>}</ErrorMessage>
              </div>
            </div>
          </div>

          <div className={styles.checkboxContainer}>
            <div className={styles.checkboxes}>
              <label
                htmlFor='check1'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check1 ? '0.4' : '1' }}
              >
                <Field name='check1' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check1' />
                Признак максимальной полноты
              </label>
              <label
                htmlFor='check2'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check2 ? '0.4' : '1' }}
              >
                <Field name='check2' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check2' />
                Упоминания в бизнес-контексте
              </label>
              <label
                htmlFor='check3'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check3 ? '0.4' : '1' }}
              >
                <Field name='check3' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check3' />
                Главная роль в публикации
              </label>
              <label
                htmlFor='check4'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check4 ? '0.4' : '1' }}
              >
                <Field name='check4' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check4' />
                Публикации только с риск-факторами
              </label>
              <label
                htmlFor='check5'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check5 ? '0.4' : '1' }}
              >
                <Field name='check5' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check5' />
                Включать технические новости рынков
              </label>
              <label
                htmlFor='check6'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check6 ? '0.4' : '1' }}
              >
                <Field name='check6' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check6' />
                Включать анонсы и календари
              </label>
              <label
                htmlFor='check7'
                className={styles.checkboxLabel}
                style={{ opacity: !formik.values.check7 ? '0.4' : '1' }}
              >
                <Field name='check7' type='checkbox' className={styles.checkbox}></Field>
                <ErrorMessage name='check7' />
                Включать сводки новостей
              </label>
            </div>
            <div className={styles.buttonContainer}>
              <button
                type='submit'
                className={styles.submitButton}
                disabled={!(formik.isValid && formik.dirty)}
              >
                Поиск
              </button>
              <p>* Обязательные к заполнению поля</p>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
