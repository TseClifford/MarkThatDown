const NoteListItem = ({ title }) => {
  return (
    <>
      <h2
        class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
        href="#!"
        data-mdb-ripple="true"
        data-mdb-ripple-color="dark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
        <span class="ml-3">{title}</span>
      </h2>
    </>
  );
};

export default NoteListItem;
