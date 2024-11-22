import { DELETE_ENTRY, EDIT_ENTRY, SET_EDITING, SET_ERROR, SUBMIT_FORM_DATA, UPDATE_FORM } from "../Type/Type";

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: { field, value },
});

export const setError = (field, error) => ({
  type: SET_ERROR,
  payload: { field, error },
});
export const submitFormData = (formData) => ({
  type: SUBMIT_FORM_DATA,
  payload: formData,
});
export const editEntry = (id, data) => ({
  type: EDIT_ENTRY,
  payload: { id, data },
});
export const setEditing = (isEditing) => ({
  type: SET_EDITING,
  payload: isEditing,
});
export const deleteEntry = (index) => ({
  type: DELETE_ENTRY,
  payload: index,
});
