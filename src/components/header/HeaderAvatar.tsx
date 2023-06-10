import styles from './Header.module.scss';
import avatar from '../../assets/avatar.png';

export default function HeaderAvatar() {
  return (
    <div className={styles.header__avatarContainer}>
      <div className={styles.header__info}>
        <div className={styles.header__usedCompanies}>
          <p className={styles.usedCompanies}>Использовано компаний</p>
          <p className={styles.limit}>Лимит по компаниям</p>
        </div>
        <div className={styles.header__numbers}>
          <p>34</p>
          <p style={{color: '#8AC540'}}>100</p>
        </div>
      </div>
      <div className={styles.header__avatar}>
        <div className={styles.header__name}>
          Алексей А.
          <br />
          <span>Выйти</span>
        </div>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  );
}
