import { takeEvery, all } from "redux-saga/effects";
import * as ActionCategory from '../Constant/CategoryConstant'
import { createCategory, DeleteCategory, EditCategory, FindCategory, handleCategory } from "./CategorySaga";
import * as ActionUser from '../Constant/UserConstant'
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";
function* watchAll(){
    yield all([
       takeEvery(ActionCategory.GET_CATEGORY_REQUEST,handleCategory),
        takeEvery(ActionCategory.ADD_CATEGORY_REQUEST,createCategory),
        takeEvery(ActionCategory.FIND_CATEGORY_REQUEST, FindCategory),
        takeEvery(ActionCategory.EDIT_CATEGORY_REQUEST, EditCategory),
        takeEvery(ActionCategory.DEL_CATEGORY_REQUEST, DeleteCategory),

                takeEvery(ActionUser.SIGNIN_REQUEST,handleSignin),
        takeEvery(ActionUser.SIGNUP_REQUEST,handleSignup),
        takeEvery(ActionUser.SIGNOUT_REQUEST,handleSignout)
    ])
}

export default watchAll