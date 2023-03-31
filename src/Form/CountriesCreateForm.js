/* eslint-disable no-undef */
import React, { useState } from "react";
import CountriesApi from "../api/CountriesApi";

export default function CountriesCreateForm(props) {
  const [value, setValue] = useState({
    id: undefined,
    name: undefined,
  });
  const HandleChange = (id) => (event) => {
    setValue({ ...value, [id]: event.target.value });
  };
  const HandleChange2 = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      id: value.id,
      name: value.name,
    };
    await CountriesApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Countries</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Countries Id:</label>
          <input
            type="text"
            placeholder="Countries ID"
            onChange={HandleChange("id")}
          ></input>
        </div>

        <di>
          <label>Countries Name:</label>
          <input
            type="text"
            placeholder="Countries Name"
            onChange={HandleChange2("name")}
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
