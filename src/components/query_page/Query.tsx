import styles from "./Query.module.scss";
import document from '../../assets/Document.svg';
import folders from '../../assets/Folders.svg';
import rocket from '../../assets/Rocket.svg';
import MyQueryForm from "./QueryForm";

export default function Query() {
  return (
    <div className={styles.container}>
      <section className={styles.headerContainer}>
        <div className={styles.header}>
          <h1>Найдите необходимые данные в пару кликов.</h1>
          <p>
            Задайте параметры поиска.<br/>Чем больше заполните, тем точнее поиск
          </p>
        </div>
        <div className={styles.folders}>
          <img src={document} alt="document" width={'91px'}/>
          <img src={folders} alt="document" width={'140px'}/>
        </div>
      </section>
      <section className={styles.formContainer}>
        {/* <div className={styles.form}> */}
          <MyQueryForm />
        {/* </div> */}
        <img className={styles.rocket} src={rocket} alt="rocket" />
      </section>
    </div>
  );
}
