import { useEffect } from 'react';
import { Table } from 'reactstrap';

interface UserListProps {
  users: any;
  seasons: any;
  players: any;
}

const UsersList = (props: UserListProps) => {
  const { users, seasons, players } = props;
  if (!users?.length) return <div>No users right now</div>;

  function capFirstLetter(string: string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function findChildren(user_id: number) {
    let children = [];
    let foundPlayer = players?.filter((player: any) => player.user_id === user_id);

    if (foundPlayer) {
      children.push(foundPlayer);
    }
    return children;
  }

  return (
    <div className="m-3">
      <div className="container-fluid m-0 p-0 border ">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={6}>Users</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="ft-bold fs-14">id</th>
              <th className="ft-bold fs-14">First Name</th>
              <th className="ft-bold fs-14">Last Name</th>
              <th className="ft-bold fs-14">Email</th>
              <th className="ft-bold fs-14">Children</th>
              <th className="ft-bold fs-14">Admin</th>
            </tr>
            {users?.map((user: any, idx: string) => {
              return (
                <tr key={idx}>
                  <td className="ft-reg fs-14">{user?.user_id}</td>
                  <td className="ft-reg fs-14">{capFirstLetter(user?.first_name)}</td>
                  <td className="ft-reg fs-14">{capFirstLetter(user?.last_name)}</td>
                  <td className="ft-reg fs-14">{user?.email}</td>

                  <td>
                    <div className="row m-0 p-0">
                      {findChildren(user.user_id).map((child: any) =>
                        child.map((a: any, b: any) => {
                          return (
                            <div key={b} className="col p-0 m-0 ft-reg fs-14">
                              {a.player_first_name}&ensp;{a.player_last_name}
                            </div>
                          );
                        })
                      )}
                    </div>
                  </td>
                  <td className="ft-reg fs-14 ">{user?.admin ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default UsersList;
