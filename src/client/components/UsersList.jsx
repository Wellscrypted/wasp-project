import getUsers from '@wasp/queries/getUsers';
import { useQuery } from '@wasp/queries';
import { Table } from 'reactstrap';

const UsersList = (props) => {
  const { data: users, isLoading, error } = useQuery(getUsers);
  if (!users?.length) return <div>No users</div>;

  function capFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <div className="m-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={5}>Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Admin</th>
          </tr>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.user_id}</td>
                <td>{capFirstLetter(user?.first_name)}</td>
                <td>{capFirstLetter(user.last_name)}</td>
                <td>{user.email}</td>
                <td>{user.is_admin ? 'Yes' : 'No'}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
