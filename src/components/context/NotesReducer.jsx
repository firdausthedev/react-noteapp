const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        isNoteModalOpen: false,
        notes: action.payload.notes,
        searchNote: {
          search: false,
        },
        searchText: "",
      };
    case "UPDATE_NOTE":
      return {
        ...state,
        isNoteModalOpen: false,
        notes: action.payload.notes,
        noteEdit: {
          note: {},
          edit: false,
        },
      };
    case "DELETE_NOTE":
      return {
        ...state,
        isNoteModalOpen: false,
        notes: action.payload.notes,
        noteEdit: {
          note: {},
          edit: false,
        },
        searchNote: {
          search: false,
        },
        searchText: "",
      };
    case "SEARCH_NOTE":
      return {
        ...state,
        searchNote: {
          notes: action.payload.notes,
          search: true,
        },
        searchText: action.payload.searchText,
      };
    case "CLEAR_SEARCH_NOTE":
      return {
        ...state,
        searchNote: {
          notes: [],
          search: false,
        },
      };
    case "SET_EDIT_MODE":
      return {
        ...state,
        noteEdit: action.payload.note,
        isNoteModalOpen: true,
      };
    case "OPEN_NOTE_MODEL":
      return {
        ...state,
        isNoteModalOpen: true,
      };
    case "CLOSE_NOTE_MODEL":
      return {
        ...state,
        isNoteModalOpen: false,
        noteEdit: {
          note: {},
          edit: false,
        },
      };
    case "SET_DARK_THEME":
      return {
        ...state,
        theme: "dark",
      };
    case "SET_LIGHT_THEME":
      return {
        ...state,
        theme: "light",
      };
    default:
      return state;
  }
};

export default notesReducer;
