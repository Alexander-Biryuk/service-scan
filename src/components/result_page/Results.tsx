import styles from "./Results.module.scss";
import targetAndArrow from "../../assets/TargetAndArrow.svg";
import carousel from '../../assets/Carousel.png';
import ListElement from "./ListElement";

export default function Results() {
  return (
    <div className={styles.container}>
      <section className={styles.hederContainer}>
        <div className={styles.heder}>
          <h1>
            Ищем. Скоро
            <br />
            будут результаты
          </h1>
          <p>
            Поиск может занять некоторое время,
            <br />
            просим сохранять терпение.
          </p>
        </div>
        <img src={targetAndArrow} alt="target" width="552px" />
      </section>

      <section className={styles.summary}>
        <div className={styles.summaryHeader}>
          <h2>Общая сводка</h2>
          <p>Найдено 4 221 вариантов</p>
        </div>
        <div className={styles.carousel}>
          <img src={carousel} alt="" />
        </div>
      </section>

      <section className={styles.documentsList}>
        <h2>Список документов</h2>
        <div className={styles.listContainer}>
          <ListElement />
          <ListElement />
        </div>
        <div className={styles.buttonContainer}>

        <button className={styles.showMoreButton}>Показать больше</button>
        </div>
      </section>
    </div>
  );
}
