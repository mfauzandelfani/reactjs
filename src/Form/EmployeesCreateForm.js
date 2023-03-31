/* eslint-disable no-undef */
import React, { useState } from "react";
import EmployeesApi from "../api/EmployeesApi";

export default function EmployeesCreateForm(props) {
  const [value, setValue] = useState({
    name: undefined,
    name2: undefined,
  });
  const HandleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const HandleChange2 = (name2) => (event) => {
    setValue({ ...value, [name2]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      name: value.name,
      name2: value.name2,
    };
    await EmployeesApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Employees</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            placeholder="Firstname"
            onChange={HandleChange("name")}
          ></input>
        </div>

        <di>
          <label>Lastname:</label>
          <input
            type="text"
            placeholder="Lastname"
            onChange={HandleChange2("name2")}
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
