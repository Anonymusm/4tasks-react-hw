import styles from "../Stat/Stat.module.css"

export default function Stat ({ stats }) {
 const COLORS = ['#4fc1ff', '#a033ff', '#ff4b61', '#20b2aa', '#ff8c00'];
  return (
    <div className={styles.stats}>
      <h2 className={styles.title}>Upload Stats</h2>
      <ul className={styles.list}>
        {stats.map((stat, index) => (
          <li 
            key={stat.id} 
            className={styles.item} 
          style={{ backgroundColor: COLORS[index % COLORS.length] }}
          >
            <p className={styles.label}>{stat.label}</p>
            <p className={styles.statPercentage}>{stat.percentage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
