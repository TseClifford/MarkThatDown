// import React, { useEffect } from "react";
// import { io } from "socket.io-client";

import NotebookList from "./components/Notebooks/NotebookList";
import NoteList from "./components/Notes/NoteList";
import Editor from "./components/Editor/Editor";
import { useState } from "react";
import useWindowWidth from "./hooks/useWindowWidth";
import StateProvider from "./providers/StateProvider";

// const ENDPOINT = "http://localhost:3000";

const MENU = "MENU";
const EDITOR = "EDITOR";
const XL_BREAKPOINT = 1280;

function App() {
  const [viewMode, setViewMode] = useState(MENU);

  const { width } = useWindowWidth();

  // useEffect(() => {
  //   const socket = io(ENDPOINT);
  //   socket.on("connect", () => console.log(socket.id));
  // }, []);

  const handleNoteClick = () => {
    setViewMode(EDITOR);
  };
  const handleEditorBackClick = () => {
    setViewMode(MENU);
  };

  return (
    <StateProvider>
      <div className="h-full flex flex-row justify-center py-6 md:w-full md:px-6 bg-gray-100">
        {viewMode === MENU && width < XL_BREAKPOINT && (
            <div className="flex flex-row w-full p-2">
              <NotebookList />
              <NoteList handleNoteClick={handleNoteClick} />
            </div>
        )}
        {viewMode === EDITOR && width < XL_BREAKPOINT && (
          <div className="w-full md:w-8/12 h-full p-4">
            <Editor
              viewMode={viewMode}
              handleEditorBackClick={handleEditorBackClick}
            />
          </div>
        )}
        {width > XL_BREAKPOINT && (
          <>
            <div className="flex flex-row w-1/3 p-2 md:w-4/12 space-x-3">
              <NotebookList />
              <NoteList handleNoteClick={handleNoteClick} />
            </div>
            <div className="w-2/3 md:w-8/12 h-full py-6">
              <Editor />
            </div>
          </>
        )}
      </div>
    </StateProvider>
  );
}

export default App;
