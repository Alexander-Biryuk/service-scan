import styles from './Main.module.scss';
import picture from '../../assets/main.png';
import picture2 from '../../assets/main2.svg';
import clock from '../../assets/clock.svg';
import loupe from '../../assets/loupe.svg';
import shield from '../../assets/shield.svg';
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';
import CarouselCard from '../carousel_card/CarouselCard';
import TarifsCard from '../tarifs_card/TarifsCard';
import lamp from '../../assets/lamp.svg';
import target from '../../assets/target.svg';
import notebook from '../../assets/notebook.svg';

export default function Main() {
  
  return (
    <main className={styles.main}>
      <section className={styles.main__part1}>
        <div className={styles.main__textWrapper}>
          <h1 className={styles.main__header}>
            сервис по поиску
            <br />
            публикаций
            <br />о компании
            <br />
            по его ИНН
          </h1>
          <p className={styles.main__description}>
            Комплексный анализ публикаций, получение данных
            <br />в формате PDF на электронную почту.
          </p>
          <button className={styles.main__part1Button}>Запросить данные</button>
        </div>
        <img className={styles.main__picture} src={picture} alt='picture' />
      </section>

      <section className={styles.main__part2}>
        <h2 className={styles.part2__header}>Почему именно мы</h2>
        <div className={styles.part2__carousel}>
          <img
            className={styles.part2__leftArrow}
            src={leftArrow}
            alt='leftArrow'
          />
          <CarouselCard
            clock={clock}
            text={'Высокая и оперативная скорость обработки заявки'}
          />
          <CarouselCard
            clock={loupe}
            text={
              'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
            }
          />
          <CarouselCard
            clock={shield}
            text={
              'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
            }
          />
          <img
            className={styles.part2__rightArrow}
            src={rightArrow}
            alt='rightArrow'
          />
        </div>
        <img src={picture2} alt='' />
      </section>

      <section className={styles.main__part3}>
        <h2 className={styles.part3__header}>наши тарифы</h2>
        <div className={styles.part3__tarifsCards}>
          <TarifsCard
            data={{
              header: 'Beginner',
              description: 'Для небольшого исследования',
              logo: lamp,
              current: 'block',
              price1: '799 ₽',
              price2: '1 200 ₽',
              content: 'или 150 ₽/мес. при рассрочке на 24 мес.',
              list1: 'Безлимитная история запросов',
              list2: 'Безопасная сделка',
              list3: 'Поддержка 24/7',
              button: 'Перейти в личный кабинет',
              colors: {
                header: {bg: '#FFB64F', col: '#000'},
                button: {bg: '#D2D2D2', col: '#000'},
              },
            }}
          />
          <TarifsCard
            data={{
              header: 'Pro',
              description: 'Для HR и фрилансеров',
              logo: target,
              current: '0',
              price1: '1299 ₽',
              price2: '2 600 ₽',
              content: 'или 279 ₽/мес. при рассрочке на 24 мес.',
              list1: 'Все пункты тарифа Beginner',
              list2: 'Экспорт истории',
              list3: 'Рекомендации по приоритетам',
              button: 'Подробнее',
              colors: {
                header: {bg: '#7CE3E1', col: '#000'},
                button: {bg: '#5970FF', col: '#fff'},
              },
            }}
          />
          <TarifsCard
            data={{
              header: 'Business',
              description: 'Для корпоративных клиентов',
              logo: notebook,
              current: '0',
              price1: '2379 ₽',
              price2: '3 700 ₽',
              content: '',
              list1: 'Все пункты тарифа Pro',
              list2: 'Безлимитное количество запросов',
              list3: 'Приоритетная поддержка',
              button: 'Подробнее',
              colors: {
                header: {bg: '#000', col: '#fff'},
                button: {bg: '#5970FF', col: '#fff'},
              },
            }}
          />
          
        </div>
      </section>
    </main>
  );
}
