import React, { useEffect, useState } from "react";
import RegionApi from "../api/RegionsApi";
import FormikRegionCreate from "./FormikRegionCreate";
import FormikRegionEdit from "./FormikRegionEdit";
export default function RegionView() {
  const [region, setRegion] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    RegionApi.list().then((data) => {
      setRegion(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    RegionApi.deleted(id).then(() => {
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
      {displayEdit ? 
        <FormikRegionEdit
        setRefresh={setRefresh}
        setDisplay={setDisplayEdit}
        id={id}
        />
       : display ? 
        <FormikRegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
       : (
        <>
          <h2>List Region</h2>
          <h1 class="text-3xl font-bold underline">Hello world!</h1>
          <button onClick={() => setDisplay(true)}>Add Photo</button>
          <table>
            <th>Region ID</th>
            <th>Region Name</th>
            <th>Region Photo</th>
            <th>Action</th>
            <tbody>
              {region &&
                region.map((req) => {
                  return (
                    <tr key={req.regionId}>
                      <td>{req.regionId}</td>
                      <td>{req.regionName}</td>
                      <td>{req.regionPhoto}</td>
                      <td>
                        <button onClick={() => onDelete(req.regionId)}>
                          Delete Region
                        </button>
                        <button onClick={() => onClick(req.regionId)}>
                          Edit Region
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
