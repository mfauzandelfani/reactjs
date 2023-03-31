/* eslint-disable no-undef */
import React, { useState } from "react";
import DepartmentsApi from "../api/DepartmentsApi";

export default function DepartmentsCreateForm(props) {
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
    await DepartmentsApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Departments</h2>
      <form onSubmit={onSubmit}>

        <di>
          <label>Departments Name:</label>
          <input
            type="text"
            placeholder="Countries Name"
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
