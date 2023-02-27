import { useContext } from "react";
import NotesContext from "../context/NoteContext";
import { Note, NoteActionType } from "./../context/NoteType";

const NoteItem = ({ note }: { note: Note }) => {
  const { dispatch } = useContext(NotesContext);

  const handleEdit = (note: Note) => {
    dispatch({
      type: NoteActionType.SET_EDIT_MODE,
      payload: { note: note, edit: true },
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
