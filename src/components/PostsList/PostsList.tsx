import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import PostItem from "../PostItem/PostItem";

import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts);
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
