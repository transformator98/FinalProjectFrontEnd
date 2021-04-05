import styles from './ContactsPage.module.scss';
import contacts from '../../team/team.json';

const ContactPageView = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Our team</h2>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {contacts.map(el => {
            return (
              <li className={styles.listItem}>
                <div className={styles.CARD}>{el.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ContactPageView;
