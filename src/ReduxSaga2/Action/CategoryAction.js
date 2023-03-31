import * as ActionType from '../Constant/CategoryConstant'

export const GetCategoryRequest = (payload) => ({
  type: ActionType.GET_CATEGORY_REQUEST,
  payload,
});

export const GetCategorySuccess = (payload) => ({
  type: ActionType.GET_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryFailed = (payload) => ({
  type: ActionType.GET_CATEGORY_FAILED,
  payload,
});

export const AddCategoryRequest = (payload) => ({
  type: ActionType.ADD_CATEGORY_REQUEST,
  payload,
});

export const AddCategorySuccess = (payload) => ({
  type: ActionType.ADD_CATEGORY_SUCCESS,
  payload,
});

export const AddCategoryFailed = (payload) => ({
  type: ActionType.ADD_CATEGORY_FAILED,
  payload,
});

export const EditCategoryRequest = (payload) => ({
  type: ActionType.EDIT_CATEGORY_REQUEST,
  payload,
});

export const EditCategorySuccess = (payload) => ({
  type: ActionType.EDIT_CATEGORY_SUCCESS,
  payload,
});

export const EditCategoryFailed = (payload) => ({
  type: ActionType.EDIT_CATEGORY_FAILED,
  payload,
});

export const DelCategoryRequest = (payload) => ({
  type: ActionType.DEL_CATEGORY_REQUEST,
  payload,
});

export const DelCategorySuccess = (payload) => ({
  type: ActionType.DEL_CATEGORY_SUCCESS,
  payload,
});

export const DelCategoryFailed = (payload) => ({
  type: ActionType.DEL_CATEGORY_FAILED,
  payload,
});

export const FindCategoryRequest = (payload) => ({
  type: ActionType.FIND_CATEGORY_REQUEST,
  payload,
});

export const FindCategorySuccess = (payload) => ({
  type: ActionType.FIND_CATEGORY_SUCCESS,
  payload,
});

export const FindCategoryFailed = (payload) => ({
  type: ActionType.FIND_CATEGORY_FAILED,
  payload,
});