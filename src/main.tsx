import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NotesProvider } from "./components/context/NoteContext";
import "./index.css";
import "./media.css";
/* eslint-disable  @typescript-eslint/no-non-null-assertion */
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotesProvider>
      <App />
    </NotesProvider>
  </React.StrictMode>,
);
