import { nanoid } from "nanoid";
import { useState } from "react";

function BookmarkForm({ addBookmark, createTag }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBookmark = {
      title,
      url,
      tag,
      id: nanoid(),
    };
    addBookmark(newBookmark);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setUrl("");
    setTag("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="form-title">Add New Bookmark</h1>
      <ul className="form-list">
        <li className="form-item">
          <label className="label" htmlFor="title">
            Page Title:
          </label>
          <input
            className="text"
            type="text"
            name="title"
            id="title-text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </li>
      </ul>
      <ul className="form-list">
        <li className="form-item">
          <label className="label" htmlFor="url">
            URL:
          </label>
          <input
            className="text"
            type="url"
            name="url"
            id="url-text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </li>
      </ul>
      <ul className="form-list">
        <li className="form-item">
          <label className="label" htmlFor="tag">
            Sorting tag:
          </label>
          <input
            className="text"
            type="text"
            name="tag"
            id="tag-text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </li>
      </ul>
      <div className="buttons">
        <button className="button" type="button" onClick={() => clearForm()}>
          Clear
        </button>
        <button className="button" type="submit">
          Add Bookmark
        </button>
      </div>
    </form>
  );
}

export default BookmarkForm;
