import React, { useEffect, useState } from "react";
import JobsApi from "../api/JobsApi";
import JobsCreateForm from "../Form/JobsCreateForm";
import JobsEditForm from "../Form/JobsEditForm";
export default function JobsViewApi() {
  const [job, setJobs] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();
  useEffect(() => {
    JobsApi.list().then((data) => {
      setJobs(data);
    });
    setRefresh(false);
  }, [refresh]);
  const onDelete = async (id) => {
    JobsApi.deleted(id).then(() => {
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
        <JobsEditForm id={id} setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : display ? (
        <JobsCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Jobs</h2>
          <button onClick={() => setDisplay(true)}>Add Employees</button>
          <table>
            <th>Jobs ID</th>
            <th>Job Title</th>
            <th>Min Salary</th>
            <th>Max Salary</th>
            <th>Action</th>
            <tbody>
              {job &&
               job.map((req) => {
                  return (
                    <tr key={req.jobId}>
                      <td>{req.jobId}</td>
                      <td>{req.jobTitle}</td>
                      <td>{req.minSalary}</td>
                      <td>{req.maxSalary}</td>

                      <td>
                        <button onClick={() => onDelete(req.jobId)}>
                          Delete Jobs
                        </button>
                        <button onClick={() => onClick(req.jobId)}>
                          Edit Jobs
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
