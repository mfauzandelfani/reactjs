import { createSlice } from "@reduxjs/toolkit";

const listEmployee = [
  { empId: 1, fullName: "Naufal", salary: 5000 },
  { empId: 2, fullName: "Ahmad", salary: 4000 },
  { empId: 3, fullName: "Firdaus", salary: 6000 },
];

export const empSlice = createSlice({
  name: "employee",
  initialState: {
    employee: [...listEmployee],
    totalSalary: listEmployee.reduce((sum, el) => sum + el.salary, 0),
  },
  reducers: {
    doGetEmps: (state) => {
      return state;
    },
    doAddEmps: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        employee: [...state.employee, payload],
        totalSalary:
          listEmployee.reduce((sum, el) => sum + el.salary, 0) + payload.salary,
      };
    },
  },
});

export const { doGetEmps, doAddEmps } = empSlice.actions;
export default empSlice.reducer;
