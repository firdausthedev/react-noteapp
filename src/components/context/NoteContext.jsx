import { createContext, useReducer } from "react";
import notesReducer from "./NotesReducer";
import { loadTheme, loadNotes } from "./NotesAction";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const initialState = {
    theme: loadTheme(),
    notes: loadNotes(),
    isNoteModalOpen: false,
    noteEdit: {
      note: {},
      edit: false,
    },
    searchNote: {
      notes: [],
      search: false,
    },
    searchText: "",
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
