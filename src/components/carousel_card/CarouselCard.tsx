import styles from './CarouselCard.module.scss'

export default function CarouselCard(props: any) {
  return (
    <div className={styles.card}>
      <img src={props.icon} alt="clock" />
      <div className={styles.text}>{props.text}</div>
    </div>
  )
}