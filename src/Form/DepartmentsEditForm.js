import React, { useEffect, useState } from "react";
import DepartmentsApi from "../api/DepartmentsApi";
export default function DepartmentsEditForm(props) {
  const [department, setDepartment] = useState([]);
  const [value, setValue] = useState({
    name: undefined,
  });

  useEffect(() => {
    DepartmentsApi.findOne(props.id).then((data) => {
      setDepartment(data);
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
    await DepartmentsApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Departments</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Department ID :</label>
          <input
            type="text"
            defaultValue={department.departmentId}
            disabled
          ></input>
        </div>
        <di>
          <label>Department Name:</label>
          <input
            type="text"
            defaultValue={department.departmentName}
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
