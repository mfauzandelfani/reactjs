/* eslint-disable no-undef */
import React, { useState } from "react";
import HistoryApi from "../api/HistoryApi";

export default function HistoryCreateForm(props) {
  const [value, setValue] = useState({

    date: undefined,
    date2: undefined
  });

  const HandleChange = (date) => (event) => {
    setValue({ ...value, [date]: event.target.value });
  };

    const HandleChange2 = (date2) => (event) => {
      setValue({ ...value, [date2]: event.target.value });
    };
  const onSubmit = async () => {
    const payload = {

      date: value.date,
    };
    await HistoryApi.create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Success Insert");
    });
  };
  return (
    <div>
      <h2>Add History</h2>
      <form onSubmit={onSubmit}>

        <div>
          <label>Start Date:</label>
          <input
            type="text"
            placeholder="Startdate"
            onChange={HandleChange2("date")}
          ></input>
        </div>

        <div>
          <label>Last Date:</label>
          <input
            type="text"
            placeholder="Lastdate"
            onChange={HandleChange2("date2")}
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
