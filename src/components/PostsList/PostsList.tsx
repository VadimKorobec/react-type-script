import { useDispatch, useSelector } from "react-redux";
import PostItem from "../PostItem/PostItem";
import { AppDispatch, RootState } from "../redux/store";

import styles from "./PostsList.module.css";
import { useEffect } from "react";
import { fetchPosts } from "../redux/operations";

const PostsList = () => {
  const { posts, isLoading, error } = useSelector(
    (state: RootState) => state.posts
  );
  

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);


  return (
    <>
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error }</p>}
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
