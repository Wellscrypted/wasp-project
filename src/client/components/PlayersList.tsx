import { Table } from 'reactstrap';

interface PlayerListProps {
  users: any;
  seasons: any;
  players: any;
}

const PlayersList = (props: PlayerListProps) => {
  const { users, seasons, players } = props;

  if (!players?.length) return <div>No players</div>;

  function capFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  console.log('players: ', players);

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
          {players?.map((player: any, idx: any) => {
            return (
              <tr key={idx}>
                <td>{player?.player_id}</td>
                <td>{player?.player_ref}</td>
                <td>{capFirstLetter(player?.player_first_name)}</td>
                <td>{capFirstLetter(player?.player_last_name)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayersList;
