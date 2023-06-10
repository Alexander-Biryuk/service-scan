import CarouselCard from '../carousel_card/CarouselCard';
import clock from '../../assets/clock.svg';
import loupe from '../../assets/loupe.svg';
import shield from '../../assets/shield.svg';
import styles from './Caorusel.module.scss';
import rightArrow from '../../assets/right-arrow.svg';
import leftArrow from '../../assets/left-arrow.svg';
import { useState } from 'react';

interface Slides {
  icon: string,
  text: string
}
export default function Caorusel() {
  const [slides, setSlides] = useState<Slides[]>([
    {
      icon: shield,
      text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    },
    {
      icon: clock,
      text: 'Высокая и оперативная скорость обработки заявки',
    },
    {
      icon: loupe,
      text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
    },
    {
      icon: shield,
      text: 'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству',
    },
    {
      icon: clock,
      text: 'Высокая и оперативная скорость обработки заявки',
    },
  ]);

  const [slideNumber, setSlideNumber] = useState(0);

  const [slide, setSlide] = useState(0);

  function handleLeft() {
    setSlideNumber((prevSlide) => prevSlide <= 0 ? prevSlide + 1 : 0);
    setSlide(-425);
    console.log('left', slideNumber);
  }

  function handleRight() {
    setSlideNumber((prevSlide) => prevSlide <= 1 ? prevSlide - 1 : 0);
    setSlide(425);
    console.log('right', slideNumber);
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.part2__leftArrow}
        src={leftArrow}
        alt='leftArrow'
        onClick={handleLeft}
      />
      <div className={styles.sliderContainer}>
        <div
          className={styles.mainSlider}
          style={{ transform: `translateX(${slide*slideNumber}px)` }}
        >
          {slides.map((item) => (
            <CarouselCard icon={item.icon} text={item.text} />
          ))}
          {/* <CarouselCard
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
          <CarouselCard
            clock={clock}
            text={'Высокая и оперативная скорость обработки заявки'}
          /> */}
        </div>
      </div>
      <img
        className={styles.part2__rightArrow}
        src={rightArrow}
        alt='rightArrow'
        onClick={handleRight}
      />
    </div>
  );
}
