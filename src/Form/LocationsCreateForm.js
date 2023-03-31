/* eslint-disable no-undef */
import React, { useState } from "react";
import LocationsApi from "../api/LocationsApi";

export default function LocationsCreateForm(props) {
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
    await LocationsApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Locations</h2>
      <form onSubmit={onSubmit}>
        <di>
          <label>City Name:</label>
          <input
            type="text"
            placeholder="City name"
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
