export default function Stat ({ stats }) {
  return (
    <>
      <h2>Upload Stats</h2>
      <ul>
        <li>
          <p>{stats[0].label}</p>
          <p>{stats[0].percentage}%</p>
        </li>
        <li>
          <p>{stats[1].label}</p>
          <p>{stats[1].percentage}%</p>
        </li>
        <li>
          <p>{stats[2].label}</p>
          <p>{stats[2].percentage}%</p>
        </li>
        <li>
          <p>{stats[3].label}</p>
          <p>{stats[3].percentage}%</p>
        </li>
      </ul>
    </>
  );
};
