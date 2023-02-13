import { useState, useContext } from "react";
import NotesContext from "../context/NoteContext";
import { handleAddNote, handleUpdateNote } from "../context/NotesAction";
import { handleDeleteNote } from "./../context/NotesAction";

const NoteModal = () => {
  const { notes, noteEdit, dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState(noteEdit.edit ? noteEdit.note.title : "");
  const [content, setContent] = useState(
    noteEdit.edit ? noteEdit.note.content : "",
  );

  const handleTitle = e => {
    setTitle(e.target.value);
  };

  const handleContent = e => {
    setContent(e.target.value);
  };

  return (
    <div id="add-note-modal">
      <div className="modal-content shadow">
        <div id="modal-title">
          <h2>Add A Note</h2>
          <button
            className="close"
            onClick={() => {
              dispatch({ type: "CLOSE_NOTE_MODEL" });
            }}>
            &times;
          </button>
        </div>
        <div id="modal-form">
          <input
            type="text"
            name="title"
            id="modal-form-title"
            placeholder="Title..."
            autoComplete="off"
            value={title}
            onChange={e => {
              handleTitle(e);
            }}
          />
          <textarea
            name="content"
            id="modal-form-content"
            cols="30"
            rows="10"
            placeholder="Write something..."
            autoComplete="off"
            value={content}
            onChange={e => {
              handleContent(e);
            }}></textarea>
          <div id="buttons">
            {noteEdit.edit === false ? (
              <button
                id="add-btn"
                className="btn btn-active shadow"
                onClick={() => {
                  dispatch({
                    type: "ADD_NOTE",
                    payload: { notes: handleAddNote(title, content, notes) },
                  });
                }}>
                Add
              </button>
            ) : (
              <>
                <button
                  id="delete-btn"
                  className="btn btn-delete shadow"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_NOTE",
                      payload: {
                        notes: handleDeleteNote(notes, noteEdit.note.id),
                      },
                    });
                  }}>
                  Delete
                </button>
                <button
                  id="edit-btn"
                  className="btn btn-edit shadow"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE_NOTE",
                      payload: {
                        notes: handleUpdateNote(
                          notes,
                          noteEdit.note.id,
                          title,
                          content,
                        ),
                      },
                    });
                  }}>
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
