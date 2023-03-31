import React, { useEffect, useState } from "react";
import UsersApi from "../api/UsersApi";
export default function UsersEditForm(props) {
  const [user, setUsers] = useState([]);
  const [value, setValue] = useState({
    id: undefined,
    name: undefined,
  });

  useEffect(() => {
    UsersApi.findOne(props.id).then((data) => {
      setUsers(data);
    });
  }, []);
  const HandleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onEdit = async () => {
    const payload = {
      id: props.id,
      name: value.name,
    };
    await UsersApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Users</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>User ID :</label>
          <input type="text" defaultValue={user.userId} disabled></input>
        </div>
        <di>
          <label>Username:</label>
          <input
            type="text"
            defaultValue={user.userName}
            onChange={HandleChange("name")}
          ></input>
        </di>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
