import { Post } from "../types/post.type";
import styles from "./PostItems.module.css";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{post.author}</p>
      <p className={styles.text}>{post.text}</p>
    </div>
  );
};

export default PostItem;
