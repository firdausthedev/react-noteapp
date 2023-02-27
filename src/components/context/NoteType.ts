import { loadNotes, loadTheme } from "./NotesAction";

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
}

export interface NoteState {
  theme: string;
  isNoteModalOpen: boolean;
  notes: Note[];
  searchTempNotes: {
    notes: Note[];
    search: boolean;
  };
  noteEdit: {
    note: Note | null;
    edit: boolean;
  };
  searchText: string;
}

export const initialState: NoteState = {
  theme: loadTheme(),
  notes: loadNotes(),
  isNoteModalOpen: false,
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

export interface AddNote {
  type: NoteActionType.ADD_NOTE;
  payload: {
    notes: Note[];
  };
}

export interface OpenNote {
  type: NoteActionType.OPEN_NOTE_MODEL;
}
export interface UpdateNote {
  type: NoteActionType.UPDATE_NOTE;
  payload: {
    notes: Note[];
  };
}

export interface DeleteNote {
  type: NoteActionType.DELETE_NOTE;
  payload: {
    notes: Note[];
  };
}

export interface SearchNote {
  type: NoteActionType.SEARCH_NOTE;
  payload: {
    notes: Note[];
    searchText: string;
  };
}

export interface ClearSearchNote {
  type: NoteActionType.CLEAR_SEARCH_NOTE;
}

export interface SetEditMode {
  type: NoteActionType.SET_EDIT_MODE;
  payload: {
    note: Note;
    edit: boolean;
  };
}

export interface CloseNoteModel {
  type: NoteActionType.CLOSE_NOTE_MODEL;
}

export interface SetDarkTheme {
  type: NoteActionType.SET_DARK_THEME;
}

export interface SetLightTheme {
  type: NoteActionType.SET_LIGHT_THEME;
}

export enum NoteActionType {
  ADD_NOTE = "ADD_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  SEARCH_NOTE = "SEARCH_NOTE",
  CLEAR_SEARCH_NOTE = "CLEAR_SEARCH_NOTE",
  SET_EDIT_MODE = "SET_EDIT_MODE",
  OPEN_NOTE_MODEL = "OPEN_NOTE_MODEL",
  CLOSE_NOTE_MODEL = "CLOSE_NOTE_MODEL",
  SET_DARK_THEME = "SET_DARK_THEME",
  SET_LIGHT_THEME = "SET_LIGHT_THEME",
}
export type NoteActions =
  | AddNote
  | OpenNote
  | UpdateNote
  | DeleteNote
  | SearchNote
  | ClearSearchNote
  | SetEditMode
  | CloseNoteModel
  | SetDarkTheme
  | SetLightTheme;
