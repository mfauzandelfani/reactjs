import React, { useEffect, useState } from "react";
import HistoryApi from "../api/HistoryApi";
export default function HistoryEditForm(props) {
  const [history, setEmployees] = useState([]);
  const [value, setValue] = useState({
    name: undefined,
    name2: undefined,
  });

  useEffect(() => {
    HistoryApi.findOne(props.id).then((data) => {
      setEmployees(data);
    });
  }, []);
  const HandleChange = (date) => (event) => {
    setValue({ ...value, [date]: event.target.value });
  };
  const HandleChange2 = (date2) => (event) => {
    setValue({ ...value, [date2]: event.target.value });
  };
  const onEdit = async () => {
    const payload = {
      id: props.id,
      date: value.date,
      date2: value.date2,
    };
    await HistoryApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit History</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>History ID :</label>
          <input
            type="text"
            defaultValue={history.idHistory}
            disabled
          ></input>
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="text"
            defaultValue={history.startDate}
            onChange={HandleChange("date")}
          ></input>
        </div>

        <div>
          <label>End Date:</label>
          <input
            type="text"
            defaultValue={history.endDate}
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
