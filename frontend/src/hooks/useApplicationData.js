import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    text: "",
    isLoading: true,
    currentNotebookId: null,
    currentNote: {},
  });

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = async () => {
    try {
      let NotebookData = await axios.get("/notebooks");

      setState((prev) => ({
        ...prev,
        isLoading: false,
        notebooks: NotebookData.data.notebooks,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const saveNote = async (currentNoteId, text) => {
    try {
      let res = await axios({
        url: "/notes/" + currentNoteId,
        method: "put",
        params: { id: currentNoteId, content: text },
      });
      refreshData();
      return res.data;
    } catch (error) {
      return error.response;
    }
  };

  const deleteNote = async (currentNoteId) => {
    try {
      let res = await axios({
        url: "/notes/" + currentNoteId,
        method: "delete",
        params: { id: currentNoteId },
      });
      refreshData();
      return res.data;
    } catch (error) {
      return error.response;
    }
  };

  const deleteNotebook = async (currentNotebookId) => {
    try {
      let res = await axios({
        url: "/notebooks/" + currentNotebookId,
        method: "delete",
        params: { id: currentNotebookId },
      });
      refreshData();
      return res.data;
    } catch (error) {
      return error.response;
    }
  };

  return { state, setState, saveNote, deleteNote, deleteNotebook };
}
