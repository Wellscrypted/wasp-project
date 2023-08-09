// import waspLogo from './waspLogo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './components/PlayersList';
import SeasonsList from './components/SeasonsList';
import UsersList from './components/UsersList';

const App = () => {
  return (
    <div>
      <div>
        <UsersList />
      </div>
      <div>
        <SeasonsList />
      </div>
      <div>
        <PlayersList />
      </div>
    </div>
  );
};
export default App;
