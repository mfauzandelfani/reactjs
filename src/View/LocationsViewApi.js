import React, { useEffect, useState } from "react";
import LocationsApi from "../api/LocationsApi";
import LocationsCreateForm from "../Form/LocationsCreateForm";
import LocationsEditForm from "../Form/LocationsEditForm";
export default function LocationsViewApi() {
  const [location, setLocations] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    LocationsApi.list().then((data) => {
      setLocations(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    LocationsApi.deleted(id).then(() => {
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
        <LocationsEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <LocationsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Locations</h2>
          <button onClick={() => setDisplay(true)}>Add Region</button>
          <table>
            <th>Locations ID</th>
            <th>City</th>
            <th>Action</th>
            <tbody>
              {location &&
                location.map((req) => {
                  return (
                    <tr key={req.locationId}>
                      <td>{req.locationId}</td>
                      <td>{req.city}</td>
                      <td>
                        <button onClick={() => onDelete(req.locationId)}>
                          Delete Location
                        </button>
                        <button onClick={() => onClick(req.locationId)}>
                          Edit Location
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
