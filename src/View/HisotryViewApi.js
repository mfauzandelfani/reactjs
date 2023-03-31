import React, { useEffect, useState } from "react";
import HistoryApi from "../api/HistoryApi";
import HistoryCreateForm from "../Form/HistoryCreateForm";
import HistoryEditForm from "../Form/HistoryEditForm";
export default function HistoryViewApi() {
  const [history, setHistory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    HistoryApi.list().then((data) => {
      setHistory(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    HistoryApi.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };
  return (
    <div>
      {displayEdit ? (
        <HistoryEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <HistoryCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List History</h2>
          <button onClick={() => setDisplay(true)}>Add Employees</button>
          <table>
            <th>History ID</th>
            <th>Startdate</th>
            <th>Enddate</th>
            <th>Action</th>
            <tbody>
              {history &&
                history.map((req) => {
                  return (
                    <tr key={req.idHistory}>
                      <td>{req.idHistory}</td>
                      <td>{req.startDate}</td>
                      <td>{req.endDate}</td>

                      <td>
                        <button onClick={() => onDelete(req.idHistory)}>
                          Delete History
                        </button>
                        <button onClick={() => onClick(req.idHistory)}>
                          Edit History
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
