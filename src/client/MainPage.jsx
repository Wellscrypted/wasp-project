import waspLogo from './waspLogo.png';
import './Main.css';
import getPlayers from '@wasp/queries/getPlayers';
import getUsers from '@wasp/queries/getUsers';
import getSeasons from '@wasp/queries/getSeasons';
import { useQuery } from '@wasp/queries';

const MainPage = () => {
  const { data: players, isLoading, error } = useQuery(getPlayers);
  // const { data: users, isLoading, error } = useQuery(getUsers);
  // const { data: seasons, isLoading, error } = useQuery(getSeasons);

  const Player = ({ player }) => {
    return (
      <div>
        {/* <input type="checkbox" id={String(player.id)} checked={player.isDone} /> */}
        {player.play_first_name} {player.player_last_name}
      </div>
    );
  };

  const PlayersList = ({ players }) => {
    if (!players?.length) return <div>No players</div>;

    return (
      <div>
        {players.map((player, idx) => (
          <Player player={player} key={idx} />
        ))}
      </div>
    );
  };

  return (
    <div>
      Players
      {players && <PlayersList players={players} />}
    </div>
  );
};
export default MainPage;
