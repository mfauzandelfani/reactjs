import React, { useEffect, useState } from "react";
import EmployeesApi from "../api/EmployeesApi";
export default function EmployeesEditForm(props) {
  const [employee, setEmployees] = useState([]);
  const [value, setValue] = useState({
    name: undefined,
    name2: undefined,
  });

  useEffect(() => {
    EmployeesApi.findOne(props.id).then((data) => {
      setEmployees(data);
    });
  }, []);
  const HandleChange = (name) => (event) => {
    setValue({ ...value, [name]: event.target.value });
  };
   const HandleChange2 = (name2) => (event) => {
     setValue({ ...value, [name2]: event.target.value });
   };
  const onEdit = async () => {
    const payload = {
      id: props.id,
      name: value.name,
      name2: value.name2,
    };
    await EmployeesApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Employees</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Employees ID :</label>
          <input
            type="text"
            defaultValue={employee.employeeId}
            disabled
          ></input>
        </div>
        <div>
          <label>Firstname:</label>
          <input
            type="text"
            defaultValue={employee.firstName}
            onChange={HandleChange("name")}
          ></input>
        </div>

        <div>
          <label>Lastname:</label>
          <input
            type="text"
            defaultValue={employee.lastName}
            onChange={HandleChange2("name2")}
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
