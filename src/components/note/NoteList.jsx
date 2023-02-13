import NoteItem from "./NoteItem";
import { useContext } from "react";
import NotesContext from "../context/NoteContext";

const NoteList = () => {
  const { notes, searchNote, dispatch } = useContext(NotesContext);
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
          onClick={() => dispatch({ type: "OPEN_NOTE_MODEL" })}>
          + <span>Add a new note</span>
        </button>
      </section>
      <section id="notes">
        {searchNote.search &&
          searchNote.notes.map(note => <NoteItem key={note.id} note={note} />)}

        {!searchNote.search &&
          notes.map(note => {
            return <NoteItem key={note.id} note={note} />;
          })}
      </section>
    </main>
  );
};

export default NoteList;
