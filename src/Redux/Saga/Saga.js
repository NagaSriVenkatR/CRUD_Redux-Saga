import { call, put, select, takeLatest } from "redux-saga/effects";

const mockApiCall = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 1000))
const selectFormData = (state) => state.form.formData;
const selectSubmittedData = (state) => state.form.submittedData;
function* handleSubmitFormData(action){
  try {
    const formData = yield select(selectFormData);
    const response = yield call(mockApiCall,formData);
    console.log("API response : ",response);
    yield put({type: "SUBMIT_FORM_DATA",payload:response});
  } catch (error) {
    console.error("Error Submitting form Data :",error);
    yield put({type:"SET_ERROR",payload:{
      field:"general",error:error.message
    }
    })
  }
}
function* handleDeleteEntry(action){
  try {
    const submittedData = yield select(selectSubmittedData);
    yield call(mockApiCall,action.payload);
    const updatedData = submittedData.filter((_,i)=> i !== action.payload);
    console.log("Updated submittedData after deletion: ",updatedData);
    yield put({type:"DELETE_ENTRY",payload:action.payload});
  } catch (error) {
    console.error("Error deleting Entry:",error);
    yield put({type:"SEt_ERROR",payload:{
      field:"general",error:error.message
    }})
  }
}
function* formSaga(){
  yield takeLatest("SUBMIT_FORM_REQUEST",handleSubmitFormData);
  yield takeLatest("Delete_ENTRY_REQUEST",handleDeleteEntry);
}
export default formSaga;