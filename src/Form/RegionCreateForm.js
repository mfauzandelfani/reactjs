/* eslint-disable no-undef */
import React, { useState } from "react";
import RegionsApi from "../api/RegionsApi";

export default function RegionCreateForm(props) {
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
    await RegionsApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Region</h2>
      <form onSubmit={onSubmit}>
        <di>
          <label>Region Name:</label>
          <input
            type="text"
            placeholder="region name"
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
