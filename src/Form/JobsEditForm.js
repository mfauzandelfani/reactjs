import React, { useEffect, useState } from "react";
import JobsApi from "../api/JobsApi";
export default function JobsEditForm(props) {
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState({
    title: undefined,
  
  });

  useEffect(() => {
    JobsApi.findOne(props.id).then((data) => {
      setJobs(data);
    });
  }, []);
  const HandleChange = (title) => (event) => {
    setValue({ ...value, [title]: event.target.value });
  };

  const onEdit = async () => {
    const payload = {
      id: props.id,
      title: value.title,
 
    };
    await JobsApi.update(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfully Update");
    });
  };
  return (
    <div>
      <h2>Edit Jobs</h2>
      <form onSubmit={onEdit}>
        <div>
          <label>Jobs ID :</label>
          <input type="text" defaultValue={jobs.jobId} disabled></input>
        </div>
        <div>
          <label>Jobs Title:</label>
          <input
            type="text"
            defaultValue={jobs.jobTitle}
            onChange={HandleChange("title")}
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
