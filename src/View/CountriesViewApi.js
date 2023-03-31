import React, { useEffect, useState } from "react";
import CountriesApi from "../api/CountriesApi";
import CountriesCreateForm from "../Form/CountriesCreateForm";
import CountriesEditForm from "../Form/CountriesEditForm";
export default function CountriesViewApi() {
  const [country, setCountry] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    CountriesApi.list().then((data) => {
      setCountry(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    CountriesApi.deleted(id).then(() => {
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
        <CountriesEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <CountriesCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Country</h2>
          <button onClick={() => setDisplay(true)}>Add Country</button>
          <table>
            <th>Country ID</th>
            <th>Country Name</th>
            <th>Action</th>
            <tbody>
              {country &&
                country.map((req) => {
                  return (
                    <tr key={req.countryId}>
                      <td>{req.countryId}</td>
                      <td>{req.countryName}</td>
                      <td>
                        <button onClick={() => onDelete(req.countryId)}>
                          Delete Country
                        </button>
                        <button onClick={() => onClick(req.countryId)}>
                          Edit Country
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
