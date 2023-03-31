import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Dashboard from "./Dashboard";
import CounterHook from './CounterHook'
import RegionViewApi from "./View/RegionViewApi";
import CountriesViewApi from "./View/CountriesViewApi";
import DepartmentsViewApi from "./View/DepartmentsViewApi";
import EmployeesViewApi from "./View/EmployeesViewApi";
import HistoryViewApi from "./View/HisotryViewApi";
import JobsViewApi from "./View/JobsViewApi";
import LocationViewApi from "./View/LocationsViewApi";
import UsersViewApi from "./View/UsersViewApi";
import RegionView from "./RegionUpload/RegionView";
import EmployeeRedux from "./ViewRedux/EmployeeRedux";
import EmployeeReduxTool from "./ViewRedux/EmployeeReduxTool";
import RegionSaga from './SagaView/RegionSaga'
import CategorySaga from "./SagaView/CategorySaga";
import Signup from './UserView/Signup'
import Signin from "./UserView/Signin";


export default function Route() {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "counter", element: <CounterHook /> },
        { path: "region", element: <RegionViewApi /> },
        { path: "country", element: <CountriesViewApi /> },
        { path: "department", element: <DepartmentsViewApi /> },
        { path: "employees", element: <EmployeesViewApi /> },
        { path: "history", element: <HistoryViewApi /> },
        { path: "jobs", element: <JobsViewApi /> },
        { path: "locations", element: <LocationViewApi /> },
        { path: "users", element: <UsersViewApi /> },
        { path: "upload", element: <RegionView /> },
        { path: "EmpRedux", element: <EmployeeRedux /> },
        { path: "EmpTool", element: <EmployeeReduxTool /> },
        { path: "Saga", element: <RegionSaga /> },
        { path: "category", element: <CategorySaga /> },
        { path: "signup", element: <Signup /> },
        { path: "signin", element: <Signin /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);
}
