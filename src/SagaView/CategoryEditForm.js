import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import RegionApi from "../api/RegionsApi";
import { useDispatch, useSelector } from "react-redux";
import {
  EditCategoryRequest,
  FindCategoryRequest,
} from "../ReduxSaga2/Action/CategoryAction";
export default function CategoryEditForm(props) {
  const dispatch = useDispatch();
  const { cat } = useSelector((state) => state.categoryState);

  useEffect(() => {
    dispatch(FindCategoryRequest(props.id));
  }, []);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      name: cat.nameCategory,
      desc: cat.description,
      start: cat.createdat,
      udate: cat.updatedat,
    },
    onSubmit: async (values) => {
      let payload = {
        id: props.id,
        name: values.name,
        desc: values.desc,
        start: values.start,
        udate: values.udate,
      };

      dispatch(EditCategoryRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Update");
      props.setRefresh(true);
    },
  });

  return (
    <div>
      <div class="mx-auto w-full max-w-[550px] bg-white">
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            ID:
          </label>
          <input
            type="text"
            defaultValue={props.id} disabled
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Category Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Category Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Description:
          </label>
          <input
            type="text"
            name="desc"
            id="desc"
            placeholder="Description"
            value={formik.values.desc}
            onChange={formik.handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            StartDate:
          </label>
          <input
            type="date"
            name="start"
            id="start"
            placeholder="Description"
            value={formik.values.start}
            onChange={formik.handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium text-[#07074D]"
          >
            Update:
          </label>
          <input
            type="date"
            name="udate"
            id="udate"
            placeholder="Description"
            value={formik.values.udate}
            onChange={formik.handleChange}
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>

        <div class="mb-5">
          <button
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            type="submit"
            onClick={formik.handleSubmit}
          >
            Simpan
          </button>
        </div>

        <div>
          <button
            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            type="submit"
            onClick={() => props.setDisplay(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
