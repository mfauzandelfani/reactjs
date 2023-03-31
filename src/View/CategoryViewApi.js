import React, { useEffect, useState } from "react";
import CatApi from "../api/CategoryApi";

export default function CategoryViewApi() {
  const [category, setCategory] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    CatApi.list().then((data) => {
      setCategory(data);
    });
    setRefresh(false);
  }, [refresh]);

  return (
    <div>
      <h2>List Region</h2>
      <table>
        <th>Region ID</th>
        <th>Region Name</th>
        <th>Action</th>
        <tbody>
          {category &&
            category.map((reg) => {
              return(
          
              <tr key={reg.idCategory}>
                <td>{reg.idCategory}</td>
                <td>{reg.nameCategory}</td>
             
              </tr>
            )
              })}
        </tbody>
      </table>
    </div>
  );
}
