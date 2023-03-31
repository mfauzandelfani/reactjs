import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetRegionRequest } from "../ReduxSaga/Action/RegionAction";
import FormikRegionCreate from "./FormikRegionCreate";
import FormikRegionEdit from "./FormikRegionEdit";
import RegionsApi from "../api/RegionsApi";
export default function RegionSaga() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state) => state.regionState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetRegionRequest());
  }, [refresh]);

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete =  (id) => {
    regions.deleted(id).then(() => {
      window.alert("Data Successfully Delete");
      setRefresh(true);
    });
  };
  

  return (
    <div>
      {displayEdit ? (
        <FormikRegionEdit
          setRefresh={setRefresh}
          setDisplay={setDisplayEdit}
          id={id}
        />
      ) : display ? (
        <FormikRegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Region</h2>
          <button onClick={() => setDisplay(true)}>Add region</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Region Photo</th>
            {regions &&
              regions.map((reg) => {
                return (
                  <tr key={reg.regionId}>
                    <td>{reg.regionId}</td>
                    <td>{reg.regionName}</td>
                    <td>{reg.regionPhoto}</td>
                    <td>
                      <button onClick={() => onClick(reg.regionId)}>
                        Edit
                      </button>

                      <button onClick={() => onDelete(reg.regionId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </>
      )}
    </div>
  );
}
