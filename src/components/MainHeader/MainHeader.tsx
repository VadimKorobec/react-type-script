import { useDispatch } from "react-redux";

import { MdMessage, MdPostAdd } from "react-icons/md";

import styles from "./MainHeader.module.css";
import { openModal } from "../redux/modalSlice";
import SearchInput from "../SearchInput/SearchInput";

const MainHeader = () => {
  const dispatch = useDispatch();
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <SearchInput/>
      <p>
        <button
          className={styles.button}
          onClick={() => dispatch(openModal(true))}
        >
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
};

export default MainHeader;
