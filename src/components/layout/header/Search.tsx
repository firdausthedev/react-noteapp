import { useContext } from "react";
import NotesContext from "../../context/NoteContext";
import { handleSearch } from "../../context/NotesAction";
import { NoteActionType } from "../../context/NoteType";
const Search = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <div id="header-search" className="shadow header-box">
      <input
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        value={state.searchText}
        onChange={e => {
          dispatch({
            type: NoteActionType.SEARCH_NOTE,
            payload: {
              notes: handleSearch(e, state.notes),
              searchText: e.target.value,
            },
          });
          if (e.target.value == "") {
            dispatch({
              type: NoteActionType.CLEAR_SEARCH_NOTE,
            });
          }
        }}
      />
    </div>
  );
};

export default Search;
