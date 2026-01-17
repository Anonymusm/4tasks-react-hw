import "./App.css";
import { Profile } from "./components/Profile/Profile";
import { Stat } from "./components/Stat/Stat";
import { FriendsList } from "./components/FreindsList/FriendsList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends.json";
import transactions from "./transactions.json"

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}  
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Stat stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
}

export default App;
