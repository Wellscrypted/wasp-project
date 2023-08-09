// import waspLogo from './waspLogo.png';
import './App.css';
import PlayersList from './components/PlayersList';
import SeasonsList from './components/SeasonsList';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div>
      <div style={{ margin: '20px 0px' }}>
        Users
        <UsersList />
      </div>

      <div style={{ margin: '20px 0px' }}>
        Players
        <PlayersList />
      </div>
      <div style={{ margin: '20px 0px' }}>
        Seasons
        <SeasonsList />
      </div>
    </div>
  );
};
export default App;
