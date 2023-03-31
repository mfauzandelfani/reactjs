import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCategoryRequest } from "../ReduxSaga2/Action/CategoryAction";
import CategoryCreateForm from "./CategoryCreateForm";
import {DelCategoryRequest} from "../ReduxSaga2/Action/CategoryAction";
import CategoryEditForm from "./CategoryEditForm";
export default function CategorySaga() {
  const dispatch = useDispatch();
  const  {category}  = useSelector((state) => state.categoryState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetCategoryRequest());
    console.log(category);
  }, [refresh]);

  const onClick = (id) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = (id) => {
      dispatch(DelCategoryRequest(id));
      window.alert("Data Successfully Delete");
      setDisplay(false)
      setRefresh(true)
      setId(id);
  };

  return (
    <div>
      {displayEdit ? (
        <CategoryEditForm
          setRefresh={setRefresh}
          setDisplay={setDisplayEdit}
          id={id}
        />
      ) : display ? (
        <CategoryCreateForm setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <>
          <h2>List Customer</h2>
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-10 border border-blue-500 rounded"
            onClick={() => setDisplay(true)}
          >
            Add Category
          </button>
          <hr />

          <table class="min-w-full border-collapse block md:table">
            <thead class="block md:table-header-group">
              <tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  ID
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Name
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Description
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Startdate
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Update
                </th>
                <th class="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            {category &&
              category.map((reg) => {
                return (
                  <tr
                    class="bg-white border border-grey-500 md:border-none block md:table-row"
                    key={reg.idCategory}
                  >
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {reg.idCategory}
                    </td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {reg.nameCategory}
                    </td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {reg.description}
                    </td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {reg.createdat}
                    </td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      {reg.updatedat}
                    </td>
                    <td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                        onClick={() => onClick(reg.idCategory)}
                      >
                        Edit
                      </button>
                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded"
                        onClick={() => onDelete(reg.idCategory)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </>
      )}
    </div>
  );
}
