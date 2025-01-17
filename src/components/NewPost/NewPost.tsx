import { ChangeEvent, FormEvent, useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

import { Post } from "../types/post.type";
import { addPost } from "../redux/postSlice";

import styles from "./NewPost.module.css";

interface NewPostProps {
  onToggleModal: () => void;
}

const NewPost = ({ onToggleModal }: NewPostProps) => {
  console.log(onToggleModal)
  const [post, setPost] = useState<Post>({
    id: "",
    author: "",
    text: "",
  });

  const dispatch = useDispatch();

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
      id: nanoid(),
      author: post.author,
      text: post.text,
    };

    dispatch(addPost(newPost));
    onToggleModal();
    reset();
  };

  const reset = () => {
    setPost({ id: "", text: "", author: "" });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          name="text"
          value={post.text}
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
      <button type="submit">Create Post</button>
    </form>
  );
};

export default NewPost;
