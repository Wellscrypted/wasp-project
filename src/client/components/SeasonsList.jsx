import getSeasons from '@wasp/queries/getSeasons';
import { useQuery } from '@wasp/queries';

const SeasonsList = (props) => {
  const { data: seasons, isLoading, error } = useQuery(getSeasons);
  if (!seasons?.length) return <div>No seasons</div>;

  const Season = ({ season }) => {
    return (
      <div>
        {season.team_name}&emsp;{season.season_name}&emsp;{season.season_year}
      </div>
    );
  };
  return (
    <div>
      {seasons.map((season, idx) => (
        <Season season={season} key={idx} />
      ))}
    </div>
  );
};

export default SeasonsList;
