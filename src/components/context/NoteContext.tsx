import { createContext, ReactNode, useReducer } from "react";
import notesReducer from "./NotesReducer";
import { NoteState, initialState, NoteActions } from "./NoteType";

const NotesContext = createContext<{
  state: NoteState;
  dispatch: React.Dispatch<NoteActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
