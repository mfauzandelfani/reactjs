import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doAddEmps } from "../ReduxToolkit/EmpSlice";
import EmployeeInput from "../EmployeeInput";
export default function EmployeeReduxTool() {
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const emp = useSelector((state) => state.emStore.employee);
  const total = useSelector((state) => state.emStore.totalSalary);
  const [values, setValues] = useState({
    fullname: "",
    salary: 0,
  });
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    const payload = {
      empId: emp.length + 1,
      fullName: values.fullname,
      salary: values.salary,
    };

    dispatch(doAddEmps(payload));
    setDisplay(false);
  };
  return (
    <div>
      <button onClick={() => setDisplay(true)}>Add Employee</button>
      {display ? (
        <EmployeeInput
          OnSubmit={onSubmit}
          HandleOnChange={handleChange}
          setDisplay={setDisplay}
        />
      ) : (
        <table>
          <th>Employee ID</th>
          <th>Full Name</th>
          <th>Salary</th>
          {(emp || []).map((emps) => {
            return (
              <tr key={emps.empId}>
                <td>{emps.empId}</td>
                <td>{emps.fullName}</td>
                <td>{emps.salary}</td>
              </tr>
            );
          })}
          <h3>Total Salary : {total}</h3>
        </table>
      )}
    </div>
  );
}
