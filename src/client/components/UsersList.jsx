import getUsers from '@wasp/queries/getUsers';
import { useQuery } from '@wasp/queries';

const UsersList = (props) => {
  const { data: users, isLoading, error } = useQuery(getUsers);
  if (!users?.length) return <div>No users</div>;

  const User = ({ user }) => {
    return (
      <div>
        {user.first_name}&emsp;{user.last_name}
      </div>
    );
  };
  return (
    <div>
      {users.map((user, idx) => (
        <User user={user} key={idx} />
      ))}
    </div>
  );
};

export default UsersList;
