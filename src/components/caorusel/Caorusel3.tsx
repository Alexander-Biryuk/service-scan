import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import clock from '../../assets/clock.svg';
import loupe from '../../assets/loupe.svg';
import shield from '../../assets/shield.svg';
import CarouselCard from '../carousel_card/CarouselCard';
import styles from './Caorusel.module.scss';

function LeftArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className={styles.myLeftArrow}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
function RightArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className={styles.myRightArrow}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export default function Caorusel3() {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />
  };
  return (
    <div>
      <Slider {...settings}>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={clock}
            text={'Высокая и оперативная скорость обработки заявки'}
          />
        </div>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={loupe}
            text={
              'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
            }
          />
        </div>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={shield}
            text={
              'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
            }
          />
        </div>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={clock}
            text={'Высокая и оперативная скорость обработки заявки'}
          />
        </div>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={loupe}
            text={
              'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос'
            }
          />
        </div>
        <div className={styles.mySlider}>
          <CarouselCard
            icon={shield}
            text={
              'Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству'
            }
          />
        </div>
      </Slider>
    </div>
  );
}
