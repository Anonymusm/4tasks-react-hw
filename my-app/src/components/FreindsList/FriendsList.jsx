import styles from "../FreindsList/Friends.module.css"

export const FriendsList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <h2 className={styles.title}>Friend List</h2>
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={styles.item}>
          <img src={avatar} alt={name} width="30" className={styles.picture}/>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.onlineStatus} style={{ color: isOnline ? "green" : "red" }}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
    </div>
  );
};
