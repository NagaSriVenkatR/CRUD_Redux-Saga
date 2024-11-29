import { all, call, put, select, takeEvery, } from "redux-saga/effects";
import axios from "axios";
import { submitFormData, setError, deleteEntry } from "../Action/Action";
import { SUBMIT_FORM_DATA, EDIT_ENTRY, DELETE_ENTRY } from "../Type/Type";
const API = "https://674435e8b4e2e04abea144c6.mockapi.io/signup"; 
function* handleSubmitFormSaga(action) {
  const  formData  = action.payload;
  console.log("Action payload in saga:", action.payload); 
  console.log("FormData in saga:", formData); 
  if (!formData) {
    console.error("FormData is undefined in saga");
    return;
  }
   const isSubmitting = yield select((state) => state.isSubmitting);
  if (isSubmitting) {
    console.log("Already submitting, preventing duplicate submissions.");
    return; 
  }
  try {
    yield put({ type: "SET_IS_SUBMITTING", payload: true });
   let response;
    if (formData.isEditing) {
      response = yield call(axios.put, `${API}/${formData.id}`, formData);
      console.log("Updated entry successfully:", response.data);
    } else {
      response = yield call(axios.post, API, formData);
      console.log("Created new entry successfully:", response.data);
    }
    yield put(submitFormData(response.data));
     yield put({ type: "SET_IS_SUBMITTING", payload: false });
  } catch (error) {
    console.error("Error in form submission:", error.response?.data || error.message);
    yield put(setError({ field: "general", error: "Error submitting the form." }));
     yield put({ type: "SET_IS_SUBMITTING", payload: false });
  }
}
function* handleEditEntrySaga(action) {
  const { id } = action.payload; 
  try {
    const response = yield call(axios.get, `${API}/${id}`); 
    console.log("Fetched entry for editing:", response.data);
    yield put({ type: "EDIT_ENTRY", payload: response.data }); 
  } catch (error) {
    console.error("Error fetching entry for editing:", error.response?.data || error.message);
    yield put(setError({ field: "general", error: "Error fetching entry data." }));
  }
}
function* handleDeleteEntrySaga(action) {
  const { id } = action.payload; 
  try {
    yield call(axios.delete, `${API}/${id}`); 
    console.log("Deleted entry with ID:", id);
    yield put(deleteEntry(id)); 
  } catch (error) {
    console.error("Error deleting entry:", error.response?.data || error.message);
    yield put(setError({ field: "general", error: "Error deleting the entry." }));
  }
}
export function* formSaga() {
  yield takeEvery(SUBMIT_FORM_DATA, handleSubmitFormSaga);
  yield takeEvery(EDIT_ENTRY, handleEditEntrySaga);
  yield takeEvery(DELETE_ENTRY, handleDeleteEntrySaga);
}
export default function* rootSaga() {
  yield all([formSaga()]);
}
