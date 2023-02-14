import Header from "./components/layout/header/Header";
import NoteModal from "./components/note/NoteModal";
import NoteList from "./components/note/NoteList";

import { useContext } from "react";
import NotesContext from "./components/context/NoteContext";

function App() {
  const { isNoteModalOpen } = useContext(NotesContext);

  return (
    <div className="container">
      {isNoteModalOpen && <NoteModal />}
      <Header />
      <NoteList />
    </div>
  );
}

export default App;
