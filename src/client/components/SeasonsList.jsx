import getSeasons from '@wasp/queries/getSeasons';
import { useQuery } from '@wasp/queries';
import { Table } from 'reactstrap';

const SeasonsList = (props) => {
  const { data: seasons, isLoading, error } = useQuery(getSeasons);
  if (!seasons?.length) return <div>No seasons</div>;

  function capFirstLetter(string) {
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
            <th>id</th>
            <th>Team Name</th>
            <th>Season Name</th>
            <th>Season Year</th>
            <th>Grade</th>
          </tr>
          {seasons?.map((season, idx) => {
            return (
              <tr key={idx}>
                <td>{season.season_id}</td>
                <td>{capFirstLetter(season.team_name)}</td>
                <td>{capFirstLetter(season.season_name)}</td>
                <td>{season.season_year}</td>
                <td>{season.grade}</td>
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
