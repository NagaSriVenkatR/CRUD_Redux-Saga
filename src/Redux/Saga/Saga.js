import { all, call, put, takeLatest } from "redux-saga/effects";
import { createEntryAPI, deleteEntryAPI, updateEntryAPI } from "../Services/Api";
import { deleteEntry, submitFormData } from "../Action/Action";
import {  DELETE_ENTRY, SUBMIT_FORM_DATA, UPDATE_FORM } from "../Type/Type";

function* handleSubmitFormSaga(action){
  try {
    const response = yield call(createEntryAPI,action.payload);
    yield put(submitFormData(response));
    console.log("Entry created successfully:",response)
  } catch (error) {
    console.error("Error creating entry:",error.message);
  }
}
function* handleUpdateFormSaga(action){
  try {
    const {id,...data} = action.payload;
    const response = yield call(updateEntryAPI,id,data);
    yield put(submitFormData(response));
    console.log("Entry updated successfully:",response);
  } catch (error) {
    console.error("Error updating entry:",error.message);
  }
}
function* handleDeleteFormSaga(action){
  try {
    const response = yield call(deleteEntryAPI,action.payload);
    yield put(deleteEntry(action.payload));
    console.log("Entry deleted successfully:",response);
  } catch (error) {
    console.error("Error deleting entry:",error.message);
  }
}
export function* formsaga() {
  yield takeLatest(SUBMIT_FORM_DATA,handleSubmitFormSaga);
  yield takeLatest(UPDATE_FORM,handleUpdateFormSaga);
  yield takeLatest(DELETE_ENTRY,handleDeleteFormSaga);
}
export default function* rootSaga(){
  yield all([formsaga()]);
}