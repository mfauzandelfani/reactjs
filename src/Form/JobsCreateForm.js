/* eslint-disable no-undef */
import React, { useState } from "react";
import JobsApi from "../api/JobsApi";

export default function JobsCreateForm(props) {
  const [value, setValue] = useState({
    id: undefined,
    title: undefined,
  });

  const HandleChange = (id) => (event) => {
    setValue({ ...value, [id]: event.target.value });
  };
  const HandleChange2 = (title) => (event) => {
    setValue({ ...value, [title]: event.target.value });
  };

  const onSubmit = async () => {
    const payload = {
      id: value.id,
      title: value.title,
    };
    await JobsApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add Jobs</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label>Jobs ID:</label>
          <input
            type="text"
            placeholder="Jobs ID"
            onChange={HandleChange("id")}
          ></input>
        </div>
        <div>
          <label>Jobs Title:</label>
          <input
            type="text"
            placeholder="Jobs Title"
            onChange={HandleChange("title")}
          ></input>
        </div>

        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
