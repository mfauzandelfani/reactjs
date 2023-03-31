import { call, put } from "redux-saga/effects";
import CategoryApi from "../../api/CategoryApi";
import {
  GetCategorySuccess,
  GetCategoryFailed,
  AddCategorySuccess,
  AddCategoryFailed,
  FindCategorySuccess,
  FindCategoryFailed,
  EditCategorySuccess,
  EditCategoryFailed,
  DelCategorySuccess,
  DelCategoryFailed,
} from "../Action/CategoryAction";

function* handleCategory() {
  try {
    const result = yield call(CategoryApi.list);
    yield put(GetCategorySuccess(result));
  } catch (error) {
    yield put(GetCategoryFailed(error));
  }
}
function* createCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.create, payload);
    yield put(AddCategorySuccess(result.data));
  } catch (error) {
    yield put(AddCategoryFailed(error));
  }
}
function* FindCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.findOne, payload);
    yield put(FindCategorySuccess(result));
  } catch (error) {
    yield put(FindCategoryFailed(error));
  }
}
function* EditCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.update, payload);
    yield put(EditCategorySuccess(result.data));
  } catch (error) {
    yield put(EditCategoryFailed(error));
  }
}

function* DeleteCategory(action) {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.deleted, payload);
    yield put(DelCategorySuccess(result.data));
  } catch (error) {
    yield put(DelCategoryFailed(error));
  }
}

export { handleCategory, createCategory, FindCategory, EditCategory, DeleteCategory };
