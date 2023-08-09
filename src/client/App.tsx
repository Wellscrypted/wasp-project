// import waspLogo from './waspLogo.png';
import './App.css';
import './fontStyles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useQuery } from '@wasp/queries';
import PlayersList from './components/PlayersList';
import SeasonsList from './components/SeasonsList';
import UsersList from './components/UsersList';
import getUsers from '@wasp/queries/getUsers';
import getPlayers from '@wasp/queries/getPlayers';
import getSeasons from '@wasp/queries/getSeasons';

const App = () => {
  const { data: users } = useQuery(getUsers);
  const { data: players } = useQuery(getPlayers);
  const { data: seasons } = useQuery(getSeasons);

  return (
    <div>
      <div>
        <UsersList users={users} seasons={seasons} players={players} />
      </div>
      <div>
        <SeasonsList users={users} seasons={seasons} players={players} />
      </div>
      <div>
        <PlayersList users={users} seasons={seasons} players={players} />
      </div>
    </div>
  );
};
export default App;
