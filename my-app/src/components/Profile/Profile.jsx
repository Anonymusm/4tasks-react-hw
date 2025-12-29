export const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
    
  return (
    <div className="profile">
      <img src={avatar} alt={username} width="100" />
      <h3>{username}</h3>
      <p>@{tag}</p>
      <p>{location}</p>
      <ul>
        <li>
          <p>Followers: {followers}</p>
        </li>
        <li>
          <p>Views: {views}</p>
        </li>
        <li>
          <p>Likes: {likes}</p>
        </li>
      </ul>
    </div>
  );
};
