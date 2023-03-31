import React, { useEffect, useState } from "react";
import UsersApi from "../api/UsersApi";
import UsersCreateForm from "../Form/UsersCreateForm";
import UsersEditForm from "../Form/UsersEditForm";
export default function UsersViewApi() {
  const [user, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    UsersApi.list().then((data) => {
      setUsers(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    UsersApi.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div>
      {displayEdit ? (
        <UsersEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <UsersCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List User</h2>
          <button onClick={() => setDisplay(true)}>Add User</button>
          <table>
            <th>User ID</th>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
            <tbody>
              {user &&
                user.map((req) => {
                  return (
                    <tr key={req.userId}>
                      <td>{req.userId}</td>
                      <td>{req.userName}</td>
                      <td>{req.userPhone}</td>
                      <td>{req.userEmail}</td>
                      <td>
                        <button onClick={() => onDelete(req.userId)}>
                          Delete User
                        </button>
                        <button onClick={() => onClick(req.userId)}>
                          Edit User
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
