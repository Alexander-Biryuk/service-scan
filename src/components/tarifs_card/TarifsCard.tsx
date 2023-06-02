import styles from './TarifsCard.module.scss';

type Props = {
  data: {
    header: string;
    description: string;
    logo: string;
    current: string;
    price1: string;
    price2: string;
    content: string;
    list1: string;
    list2: string;
    list3: string;
    button: string;
    colors: {
      header: { bg: string; col: string };
      button: { bg: string; col: string };
    };
  };
};
export default function TarifsCard(props: Props) {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__header}
        style={{
          backgroundColor: props.data.colors.header.bg,
          color: props.data.colors.header.col,
        }}
      >
        <div className={styles.card__headerText}>
          <h3>{props.data.header}</h3>
          <p>{props.data.description}</p>
        </div>
        <img src={props.data.logo} alt='lamp' />
      </div>
      <div className={styles.card__info}>
        <div style={{ opacity: props.data.current }}>Текущий тариф</div>
        <h3>
          {props.data.price1}&nbsp;&nbsp;<span>{props.data.price2}</span>
        </h3>
        <p>{props.data.content}<br/></p>
        <h4>В тариф входит:</h4>
        <ul>
          <li>{props.data.list1}</li>
          <li>{props.data.list2}</li>
          <li>{props.data.list3}</li>
        </ul>
        <button
          style={{
            backgroundColor: props.data.colors.button.bg,
            color: props.data.colors.button.col,
          }}
        >
          {props.data.button}
        </button>
      </div>
    </div>
  );
}
