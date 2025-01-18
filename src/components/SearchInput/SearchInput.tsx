import { useRef } from "react";
import styles from "./SearchInput.module.css";
import { useDispatch } from "react-redux";
import { findPost } from "../redux/postSlice";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    if (inputRef.current) {
      dispatch(findPost(inputRef.current.value));
    }
  };

  return (
    <input
      className={styles.input}
      ref={inputRef}
      type="text"
      onChange={handleChange}
    />
  );
};

export default SearchInput;
