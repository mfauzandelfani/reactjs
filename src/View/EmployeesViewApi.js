import React, { useEffect, useState } from "react";
import EmployeesApi from "../api/EmployeesApi";
import EmployeesCreateForm from "../Form/EmployeesCreateForm";
import EmployeesEditForm from "../Form/EmployeesEditForm";
export default function EmployeesViewApi() {
  const [employee, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    EmployeesApi.list().then((data) => {
      setEmployees(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    EmployeesApi.deleted(id).then(() => {
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
        <EmployeesEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <EmployeesCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Employees</h2>
          <button onClick={() => setDisplay(true)}>Add Employees</button>
          <table>
            <th>Employees ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Action</th>
            <tbody>
              {employee &&
                employee.map((req) => {
                  return (
                    <tr key={req.employeeId}>
                      <td>{req.employeeId}</td>
                      <td>{req.firstName}</td>
                      <td>{req.lastName}</td>
                      <td>
                        <button onClick={() => onDelete(req.employeeId)}>
                          Delete Employee
                        </button>
                        <button onClick={() => onClick(req.employeeId)}>
                          Edit Employee
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
