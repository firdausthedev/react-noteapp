import { NoteActions, NoteState } from "./NoteType";

const notesReducer = (state: NoteState, action: NoteActions): NoteState => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        isNoteModalOpen: false,
        notes: action.payload.notes,
        searchTempNotes: {
          notes: [],
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
          note: null,
          edit: false,
        },
      };
    case "DELETE_NOTE":
      return {
        ...state,
        isNoteModalOpen: false,
        notes: action.payload.notes,
        noteEdit: {
          note: null,
          edit: false,
        },
        searchTempNotes: {
          notes: [],
          search: false,
        },
        searchText: "",
      };
    case "SEARCH_NOTE":
      return {
        ...state,
        searchTempNotes: {
          notes: action.payload.notes,
          search: true,
        },
        searchText: action.payload.searchText,
      };
    case "CLEAR_SEARCH_NOTE":
      return {
        ...state,
        searchTempNotes: {
          notes: [],
          search: false,
        },
      };
    case "SET_EDIT_MODE":
      return {
        ...state,
        noteEdit: {
          note: action.payload.note,
          edit: action.payload.edit,
        },
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
          note: null,
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
