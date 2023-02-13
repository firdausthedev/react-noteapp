import { useContext } from "react";
import NotesContext from "../context/NoteContext";

const NoteItem = ({ note }) => {
  const { dispatch } = useContext(NotesContext);

  const handleEdit = note => {
    dispatch({ type: "OPEN_NOTE_MODEL" });
    dispatch({
      type: "SET_EDIT_MODE",
      payload: { note: { note: note, edit: true } },
    });
  };

  return (
    <button className="note shadow" onClick={() => handleEdit(note)}>
      <div className="note-title">
        <div className={`circle ${note.tag}`}></div>
        <h2>
          {note.title.length > 12
            ? `${note.title.substring(0, 12)}...`
            : note.title}
        </h2>
      </div>
      <p className="note-para">{note.content}</p>
    </button>
  );
};

export default NoteItem;
