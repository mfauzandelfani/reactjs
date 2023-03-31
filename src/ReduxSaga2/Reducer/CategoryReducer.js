import * as ActionType from "../Constant/CategoryConstant";

const INIT_STATE = {
  category: [],
  cat: []
};

const CategoryReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ActionType.GET_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_CATEGORY_SUCCESS:
      return GetCategorySuccessfully(state, action);
    case ActionType.ADD_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_CATEGORY_SUCCESS:
      return AddCategorySuccessfully(state, action);
    case ActionType.FIND_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.FIND_CATEGORY_SUCCESS:
      return FindCategorySuccessfully(state, action);
    case ActionType.EDIT_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_CATEGORY_SUCCESS:
      return EditCategorySuccessfully(state, action);

    case ActionType.DEL_CATEGORY_REQUEST:
      return { ...state };
    case ActionType.DEL_CATEGORY_SUCCESS:
      return DelCategorySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetCategorySuccessfully = (state, action) => {
  
  return {
    ...state,
    category: action.payload,
  };
};

const AddCategorySuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    category: [...state.category, payload],
  };
};

const FindCategorySuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    cat: payload,
  };
};

const EditCategorySuccessfully = (state, action) => {
  return {
    ...state,
  };
};

const DelCategorySuccessfully = (state, action) => {
  const { payload } = action;
  return {
    ...state,
    cat: payload,
  };
};
export default CategoryReducer;
