import { Table } from 'reactstrap';

interface SeasonListProps {
  users: any;
  seasons: any;
  players: any;
}

const SeasonsList = (props: SeasonListProps) => {
  const { users, seasons, players } = props;

  if (!seasons?.length) return <div>No seasons</div>;

  function capFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5}>Seasons</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="ft-bold fs-14">id</th>
            <th className="ft-bold fs-14">Team Name</th>
            <th className="ft-bold fs-14">Season Name</th>
            <th className="ft-bold fs-14">Season Year</th>
            <th className="ft-bold fs-14">Grade</th>
          </tr>
          {seasons?.map((season: any, idx: any) => {
            return (
              <tr key={idx}>
                <td className="ft-reg fs-14">{season?.season_id}</td>
                <td className="ft-reg fs-14">{capFirstLetter(season?.team_name)}</td>
                <td className="ft-reg fs-14">{capFirstLetter(season?.season_name)}</td>
                <td className="ft-reg fs-14">{season?.season_year}</td>
                <td className="ft-reg fs-14">{season?.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
    // </div>
  );
};

export default SeasonsList;
