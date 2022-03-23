import NotebookListItem from "./NotebookListItem";
import Heading from "../Heading";
import { CollectionIcon } from "@heroicons/react/outline";
import { NotebooksContext } from "../../providers/NotebooksProvider";
import { useContext } from "react";

const NotebookList = ({ setNotes }) => {
  const { notebooksData, isLoading } = useContext(NotebooksContext);

  const renderNotebooks = (userId) => {
    const filteredNotebooks = notebooksData.filter(
      (item) => item.user_id === userId
    );

    return filteredNotebooks.map((item) => {
      return (
        <NotebookListItem
          key={item.id}
          book={item.book}
          onClick={() => setNotes(item.notes)}
        />
      );
    });
  };

  return (
    <div>
      <Heading title={"Notebooks"} Icon={CollectionIcon} />
      {notebooksData && renderNotebooks(1)}
    </div>
  );
};

export default NotebookList;

