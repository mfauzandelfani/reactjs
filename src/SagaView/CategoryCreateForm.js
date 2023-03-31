import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegionsApi from "../api/RegionsApi";
import { AddCategoryRequest } from "../ReduxSaga2/Action/CategoryAction";

export default function CategoryRegionCreate(props) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: undefined,
      desc: undefined,
      start: undefined,
      udate: undefined,
    },
    onSubmit: async (values) => {
      let payload = {
      "name": values.name,
      "desc": values.desc,
      "start": values.start,
      "udate": values.udate,
      }
      

      dispatch(AddCategoryRequest(payload));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
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
