/* eslint-disable no-undef */
import React, { useState } from "react";
import UsersApi from "../api/UsersApi";

export default function UsersCreateForm(props) {
  const [value, setValue] = useState({
    name: undefined,
  });
  const HandleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      name: value.name,
    };
    await UsersApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Users</h2>
      <form onSubmit={onSubmit}>
        <di>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
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
