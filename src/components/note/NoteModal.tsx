import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotesContext from "../context/NoteContext";
import {
  handleAddNote,
  handleUpdateNote,
  handleDeleteNote,
} from "../context/NotesAction";
import { NoteActionType } from "../context/NoteType";

const NoteModal = () => {
  /* eslint-disable  @typescript-eslint/no-non-null-assertion */
  const { state, dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState(
    state.noteEdit.edit ? state.noteEdit.note!.title : "",
  );
  const [content, setContent] = useState(
    state.noteEdit.edit ? state.noteEdit.note!.content : "",
  );

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        id="add-note-modal">
        <div className="modal-content shadow">
          <div id="modal-title">
            <h2>Add A Note</h2>
            <button
              className="close"
              onClick={() => {
                dispatch({ type: NoteActionType.CLOSE_NOTE_MODEL });
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
              cols={30}
              rows={10}
              placeholder="Write something..."
              autoComplete="off"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                handleContent(e);
              }}></textarea>
            <div id="buttons">
              {state.noteEdit.edit === false ? (
                <button
                  id="add-btn"
                  className="btn btn-active shadow"
                  onClick={() => {
                    dispatch({
                      type: NoteActionType.ADD_NOTE,
                      payload: {
                        notes: handleAddNote(title, content, state.notes),
                      },
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
                        type: NoteActionType.DELETE_NOTE,
                        payload: {
                          notes: handleDeleteNote(
                            state.notes,
                            state.noteEdit.note!.id,
                          ),
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
                        type: NoteActionType.UPDATE_NOTE,
                        payload: {
                          notes: handleUpdateNote(
                            state.notes,
                            state.noteEdit.note!.id,
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
      </motion.div>
    </AnimatePresence>
  );
};

export default NoteModal;
