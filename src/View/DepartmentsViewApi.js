import React, { useEffect, useState } from "react";
import DepartmentApi from "../api/DepartmentsApi";
import DepartmentsCreateForm from "../Form/DepartmentsCreateForm";
import DepartmentsEditForm from "../Form/DepartmentsEditForm";
export default function DepartmentsViewApi() {
  const [department, setDepartmnet] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    DepartmentApi.list().then((data) => {
      setDepartmnet(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    DepartmentApi.deleted(id).then(() => {
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
        <DepartmentsEditForm
          id={id}
          setRefresh={setRefresh}
          setDisplay={setDisplay}
        />
      ) : display ? (
        <DepartmentsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Department</h2>
          <button onClick={() => setDisplay(true)}>Add Department</button>
          <table>
            <th>Department ID</th>
            <th>Department Name</th>
            <th>Action</th>
            <tbody>
              {department &&
                department.map((req) => {
                  return (
                    <tr key={req.departmentId}>
                      <td>{req.departmentId}</td>
                      <td>{req.departmentName}</td>
                      <td>
                        <button onClick={() => onDelete(req.departmentId)}>
                          Delete Department
                        </button>
                        <button onClick={() => onClick(req.departmentId)}>
                          Edit Department
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
