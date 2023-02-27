import NoteItem from "./NoteItem";
import { useContext } from "react";
import NotesContext from "../context/NoteContext";
import { NoteActionType } from "../context/NoteType";

const NoteList = () => {
  const { state, dispatch } = useContext(NotesContext);

  return (
    <main>
      <section id="tags">
        <div id="buttons-container">
          <button className="btn btn-active shadow">All</button>
          <button className="btn shadow">Tag</button>
          <button className="btn shadow">Tag</button>
          <button className="btn shadow">...</button>
        </div>

        <button
          id="btn-add"
          className="btn btn-active shadow"
          onClick={() => dispatch({ type: NoteActionType.OPEN_NOTE_MODEL })}>
          + <span>Add a new note</span>
        </button>
      </section>
      <section id="notes">
        {state.searchTempNotes.search &&
          state.searchTempNotes.notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}

        {!state.searchTempNotes.search &&
          state.notes.map(note => {
            return <NoteItem key={note.id} note={note} />;
          })}
      </section>
    </main>
  );
};

export default NoteList;
