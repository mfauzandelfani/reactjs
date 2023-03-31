import React, { useEffect, useState } from "react";
import CountriesApi from "../api/CountriesApi";
export default function CountriesEditForm(props) {
  const [country, setCountry] = useState([]);
  const [value, setValue] = useState({
    id: undefined,
    name: undefined,
  });

  useEffect(() => {
    CountriesApi.findOne(props.id).then((data) => {
      setCountry(data);
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
    await CountriesApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Countries</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Country ID :</label>
          <input type="text" defaultValue={country.countryId} disabled></input>
        </div>
        <di>
          <label>Countryn Name:</label>
          <input
            type="text"
            defaultValue={country.countryName}
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
