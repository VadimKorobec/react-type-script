import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/modalSlice";
import { addPost } from "../redux/operations";
import { AppDispatch } from "../redux/store";

import { Post } from "../types/post.type";


import styles from "./NewPost.module.css";

const NewPost = () => {
  const [post, setPost] = useState<Post>({
    author: "",
    body: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      return;
    }

    setPost((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newPost: Post = {
      author: post.author,
      body: post.body,
    };

    dispatch(addPost(newPost));
    dispatch(closeModal(false));
    reset();
  };

  const reset = () => {
    setPost({ body: "", author: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          name="body"
          value={post.body}
          required
          rows={3}
          onChange={handleChange}
        />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          name="author"
          value={post.author}
          id="name"
          required
          onChange={handleChange}
        />
      </p>
      <p className={styles.actions}>
        <button onClick={() => dispatch(closeModal(false))} type="button">
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
};

export default NewPost;
