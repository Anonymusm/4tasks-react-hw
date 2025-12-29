export const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id}>
          <img src={avatar} alt={name} width="30" />
          <h3>{name}</h3>
          <p style={{ color: isOnline ? "green" : "red" }}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};
