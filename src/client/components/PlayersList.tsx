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
            <th className="ft-bold fs-14">id</th>
            <th className="ft-bold fs-14">Player Ref</th>
            <th className="ft-bold fs-14">First Name</th>
            <th className="ft-bold fs-14">Last Name</th>
            <th className="ft-bold fs-14">User Id</th>
          </tr>
          {players?.map((player: any, idx: any) => {
            return (
              <tr key={idx}>
                <td className="ft-reg fs-14">{player?.player_id}</td>
                <td className="ft-reg fs-14">{player?.player_ref}</td>
                <td className="ft-reg fs-14">{capFirstLetter(player?.player_first_name)}</td>
                <td className="ft-reg fs-14">{capFirstLetter(player?.player_last_name)}</td>
                <td className="ft-reg fs-14">{player.user_id}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default PlayersList;
