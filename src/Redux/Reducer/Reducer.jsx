const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
    isEditing: false,
    isSubmitting: false,
    id: null,
  },
  error: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    gender: "",
    location: "",
  },
  submittedData: [],
};
function formReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_FORM":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.field]: action.payload.value,
        },
        error: {
          ...state.error,
          [action.payload.field]: "",
        },
      };
    case "ADD_ENTRY":
      if (state.formData.isEditing) return state;
      const newEntry = {
        ...action.payload,
        id: Date.now(),
      };

      return {
        ...state,
        submittedData: [...state.submittedData, newEntry],
      };
    case "SET_ERROR":
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.field]: action.payload.error,
        },
      };
    case "SET_IS_SUBMITTING":
      return {
        ...state,
        isSubmitting: action.payload,
      };
    case "SET_EDITING":
      return {
        ...state,
        formData: {
          ...state.formData,
          isEditing: action.payload,
        },
      };
    case "SUBMIT_FORM_DATA":
      console.log("Submitting form data:", action.payload);
      if (state.formData.isEditing) {
        const updatedData = [...state.submittedData];
        const editIndex = updatedData.findIndex(
          (entry) => entry.id === state.formData.id
        );
        console.log("Editing entry at index:", editIndex);
        if (editIndex !== -1) {
          updatedData[editIndex] = {
            ...updatedData[editIndex],
            ...action.payload,
          };
          console.log("Updated entry:", updatedData[editIndex]);
        } else {
          console.error("No entry found with ID:", state.formData.id);
        }
        return {
          ...state,
          submittedData: updatedData,
          formData: { ...initialState.formData },
          isEditing: false,
          error: {},
        };
      } else {
        const newEntry = {
          ...action.payload,
          id: Date.now(),
        };
        console.log("Adding new entry:", newEntry);
        return {
          ...state,
          submittedData: [...state.submittedData, newEntry],
          formData: { ...initialState.formData },
          error: {},
        };
      }
    case "EDIT_ENTRY":
      console.log("Attempting to edit entry with ID:", action.payload.id);
      const entryToEdit = state.submittedData.find(
        (entry) => entry.id === action.payload.id
      );
      console.log("Current submittedData:", state.submittedData);
      if (!entryToEdit) {
        console.error("No entry found with ID:", action.payload.id);
        return state;
      }
      console.log("Loaded entry for editing:", entryToEdit);
      return {
        ...state,
        formData: {
          ...entryToEdit,
          isEditing: true,
        },
      };

    case "DELETE_ENTRY":
      console.log("Deleting entry at index:", action.payload);
      return {
        ...state,
        submittedData: state.submittedData.filter(
          (_, i) => i !== action.payload
        ),
      };

    default:
      return state;
  }
}
export default formReducer;
