import axios from "axios";
import { createContext } from "react";
import useApplicationData from "../hooks/useApplicationData";

export const StateContext = createContext();

axios.defaults.baseURL = "http://localhost:3000/";

export default function StateProvider(props) {
  const { state, setState, saveNote, deleteNote, deleteNotebook } = useApplicationData();

  const { notebooks, text, isLoading, currentNotebookId, currentNote } = state;

  const stateProviderData = {
    setState,
    notebooks,
    text,
    isLoading,
    currentNotebookId,
    currentNote,
    saveNote,
    deleteNote,
    deleteNotebook,
  };

  return (
    <StateContext.Provider value={stateProviderData}>
      {props.children}
    </StateContext.Provider>
  );
}
