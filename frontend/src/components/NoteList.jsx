import NoteListItem from "./NoteListItem";

const NoteList = () => {
  return (
    <>
      <h1 class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
        <svg
          class="w-6 h-6 dark:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
          ></path>
        </svg>
        <span class="ml-3">Notes</span>
      </h1>
      <NoteListItem title={"Note Title 1"} />
      <NoteListItem title={"Note Title 2"} />
      <NoteListItem title={"Note Title 3"} />
    </>
  );
};

export default NoteList;
