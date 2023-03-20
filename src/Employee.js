import React, { useState } from "react";

export default function Employee() {
  const listEmployee = [
    { empID: 1, Fullname: "Naufal", salary: 5000 },
    { empID: 2, Fullname: "Dian", salary: 6000 },
    { empID: 3, Fullname: "Imel", salary: 3000 },
  ];
  const PenambahanGaji = (id) => {
    setEmployee(
        [...employee.map(emp =>{
            if(id === emp.empID){
                emp.salary = emp.salary + 500
                return emp
            }
            else{
                return emp
            }
        })]

    )
  }

    const PenguranganGaji = (id) => {
      setEmployee([
        ...employee.map((emp) => {
          if (id === emp.empID) {
            emp.salary = emp.salary - 500;
            return emp;
          } else {
            return emp;
          }
        }),
      ]);
    };

  const [employee, setEmployee] = useState(listEmployee);
  return (
    <div>
      <h2>List Employee</h2>
      <ul>
        {(employee || []).map((emp) => {
          return (
            <li key={emp.empID}>
              <p>Emp Id = {emp.empID}</p>
              <p>Name = {emp.Fullname}</p>
              <p>Salary = {emp.salary}</p>
              <button onClick={()=> PenambahanGaji(emp.empID)}>Tambah Gaji</button>
              <button onClick={()=>PenguranganGaji(emp.empID)}>Kurang Gaji</button>
     
            </li>
          );
        })}
      </ul>
    </div>
  );
}
