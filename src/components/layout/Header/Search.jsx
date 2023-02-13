import { useContext } from "react";
import NotesContext from "../../context/NoteContext";
import { handleSearch } from "../../context/NotesAction";
const Search = () => {
  const { notes, searchText, dispatch } = useContext(NotesContext);

  return (
    <div id="header-search" className="shadow header-box">
      <input
        type="text"
        name="search"
        placeholder="Search"
        autoComplete="off"
        value={searchText}
        onChange={e => {
          dispatch({
            type: "SEARCH_NOTE",
            payload: {
              notes: handleSearch(e, notes),
              searchText: e.target.value,
            },
          });
          if (e.target.value == "") {
            dispatch({
              type: "CLEAR_SEARCH_NOTE",
            });
          }
        }}
      />
    </div>
  );
};

export default Search;
