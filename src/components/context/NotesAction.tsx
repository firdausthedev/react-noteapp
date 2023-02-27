import { Note } from "./NoteType";

export const loadTheme = () => {
  const currentTheme = localStorage.getItem("theme")
    ? localStorage.getItem("theme")
    : null;
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    return currentTheme;
  } else {
    return "light";
  }
};

export const loadNotes = () => {
  const notes = localStorage.getItem("notes")
    ? localStorage.getItem("notes")
    : null;
  if (notes) {
    return JSON.parse(notes);
  } else {
    return [];
  }
};

export const handleAddNote = (
  title: string,
  content: string,
  notes: Note[],
) => {
  const tags = [
    "circle-red",
    "circle-blue",
    "circle-pink",
    "circle-yellow",
    "circle-green",
  ];
  const id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  const randomTag = tags[Math.floor(Math.random() * tags.length)];
  const note = { title: title, content: content, id: id, tag: randomTag };
  localStorage.setItem("notes", JSON.stringify([note, ...notes]));
  return [note, ...notes];
};

export const handleUpdateNote = (
  notes: Note[],
  id: string,
  title: string,
  content: string,
) => {
  const editedNotes = notes.map((note: Note) => {
    if (note.id == id) {
      note.title = title;
      note.content = content;
    }
    return note;
  });
  localStorage.setItem("notes", JSON.stringify([...editedNotes]));
  return [...editedNotes];
};

export const handleDeleteNote = (notes: Note[], id: string) => {
  const filteredNotes = notes.filter(note => note.id != id);
  localStorage.setItem("notes", JSON.stringify([...filteredNotes]));
  return [...filteredNotes];
};

export const handleSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  notes: Note[],
) => {
  const filteredNotes = notes.filter(note =>
    note.title.includes(e.target.value),
  );
  return filteredNotes;
};
