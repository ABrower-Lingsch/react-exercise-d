import "./App.css";
import { useState } from "react";
import BookmarkForm from "../BookmarkForm";
import BookmarkList from "../BookmarkList";
import { nanoid } from "nanoid";

const INITIAL_LINKS = [
  {
    title: "React",
    url: "https://reactjs.org/",
    tag: "react",
    id: nanoid(),
  },

  {
    title: "Python",
    url: "https://pypi.org/",
    tag: "python",
    id: nanoid(),
  },
];

function App() {

  const [bookmarks, setBookmarks] = useState(INITIAL_LINKS);

  const addBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };


  return (
    <div className="App">
      <BookmarkForm addBookmark={addBookmark} />
      <BookmarkList bookmarks={bookmarks} />
    </div>
  )
}

export default App;
