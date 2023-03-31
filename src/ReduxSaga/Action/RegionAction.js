import * as ActionType from '../Constant/RegionConstant'

export const GetRegionRequest = () => ({
  type: ActionType.GET_REGION_REQUEST,
});

export const GetRegionSuccess = (payload) => ({
  type: ActionType.GET_REGION_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload) => ({
  type: ActionType.GET_REGION_FAILED,
  payload,
});

export const AddRegionRequest = (payload) =>({
  type: ActionType.ADD_REGION_REQUEST,
  payload
})

export const AddRegionSuccess = (payload) => ({
  type: ActionType.ADD_REGION_SUCCESS,
  payload
});

export const AddRegionFailed = (payload) => ({
  type: ActionType.ADD_REGION_FAILED,
  payload
});

export const EditRegionRequest = (payload) => ({
  type: ActionType.EDIT_REGION_REQUEST,
  payload,
});

export const EditRegionSuccess = (payload) => ({
  type: ActionType.EDIT_REGION_SUCCESS,
  payload,
});

export const EditRegionFailed = (payload) => ({
  type: ActionType.EDIT_REGION_FAILED,
  payload,
});

export const DelRegionRequest = (payload) => ({
  type: ActionType.DEL_REGION_REQUEST,
  payload,
});

export const DelRegionSuccess = (payload) => ({
  type: ActionType.DEL_REGION_SUCCESS,
  payload,
});

export const DelRegionFailed = (payload) => ({
  type: ActionType.DEL_REGION_FAILED,
  payload,
});

export const FindRegionRequest = (payload) => ({
  type: ActionType.FIND_REGION_REQUEST,
  payload,
});

export const FindRegionSuccess = (payload) => ({
  type: ActionType.FIND_REGION_SUCCESS,
  payload,
});

export const FindRegionFailed = (payload) => ({
  type: ActionType.FIND_REGION_FAILED,
  payload,
});