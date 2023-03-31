import * as ActionType from "../Constant/RegionConstant";

const INIT_STATE = {
  regions: [],
  region: [],
};

const RegionReduce = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_REGION_REQUEST:
      return { ...state };
    case ActionType.GET_REGION_SUCCESS:
      return GetRegionSuccessfully(state, action);
    case ActionType.ADD_REGION_REQUEST:
      return { ...state };
    case ActionType.ADD_REGION_SUCCESS:
      return AddRegionSuccessfully(state, action);
    case ActionType.FIND_REGION_REQUEST:
      return { ...state };
    case ActionType.FIND_REGION_SUCCESS:
      return FindRegionSuccessfully(state, action);
    case ActionType.EDIT_REGION_REQUEST:
      return { ...state };
    case ActionType.EDIT_REGION_SUCCESS:
      return EditRegionSuccessfully(state, action);

    case ActionType.DEL_REGION_REQUEST:
      return { ...state };
    case ActionType.DEL_REGION_SUCCESS:
      return DelRegionSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetRegionSuccessfully = (state, action) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegionSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const FindRegionSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    region: payload,
  };
};

const EditRegionSuccessfully = (state, action) => {
  return {
    ...state,
  };
};

const DelRegionSuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    region: payload,
  };
};
export default RegionReduce;
