import getPlayers from '@wasp/queries/getPlayers';
import { useQuery } from '@wasp/queries';
import { Table } from 'reactstrap';

const PlayersList = (props) => {
  const { data: players, isLoading, error } = useQuery(getPlayers);
  if (!players?.length) return <div>No players</div>;

  console.log('players', players);

  function capFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5}>Players</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>id</th>
            <th>Player Ref</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          {players?.map((player, idx) => {
            return (
              <tr key={idx}>
                <td>{player.player_id}</td>
                <td>{player.player_ref}</td>
                <td>{capFirstLetter(player.player_first_name)}</td>
                <td>{capFirstLetter(player.player_last_name)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayersList;
