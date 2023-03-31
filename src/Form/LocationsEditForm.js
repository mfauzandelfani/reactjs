import React, { useEffect, useState } from "react";
import LocationsApi from "../api/LocationsApi";
export default function LocationsEditForm(props) {
  const [location, setLocations] = useState([]);
  const [value, setValue] = useState({
    name: undefined,
  });

  useEffect(() => {
    LocationsApi.findOne(props.id).then((data) => {
      setLocations(data);
    });
  }, []);
  const HandleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onEdit = async () => {
    const payload = {
      id: props.id,
      name: value.name,
    };
    await LocationsApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Location</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Location ID :</label>
          <input type="text" defaultValue={location.locationId} disabled></input>
        </div>
        <di>
          <label>Location Name:</label>
          <input
            type="text"
            defaultValue={location.city}
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
