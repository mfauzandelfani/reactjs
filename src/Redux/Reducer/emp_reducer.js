import { GET_EMP, ADD_EMP } from "../Constant/emp_constant";

const listEmployee = [
  { empId: 1, fullName: "Naufal", salary: 5000 },
  { empId: 2, fullName: "Ahmad", salary: 4000 },
  { empId: 3, fullName: "Firdaus", salary: 6000 },
];

const INIT_STATE = {
  employee: [...listEmployee],
  totalSalary: listEmployee.reduce((sum, el) => sum + el.salary, 0),
};

const empReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_EMP:
      return { ...state };
    case ADD_EMP:
      return applyAddEmp(state, action);
    default:
      return state;
  }
};

const applyAddEmp = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    employee: [...state.employee, payload],
    totalSalary: state.employee.reduce((sum, el) => sum + el.salary, 0),
  };
};

export default empReducer;
