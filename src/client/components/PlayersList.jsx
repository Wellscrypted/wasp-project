import getPlayers from '@wasp/queries/getPlayers';
import { useQuery } from '@wasp/queries';

const PlayersList = (props) => {
  const { data: players, isLoading, error } = useQuery(getPlayers);
  if (!players?.length) return <div>No players</div>;

  const Player = ({ player }) => {
    return (
      <div>
        {player.player_first_name}&emsp;{player.player_last_name}
      </div>
    );
  };
  return (
    <div>
      {players.map((player, idx) => (
        <Player player={player} key={idx} />
      ))}
    </div>
  );
};

export default PlayersList;
