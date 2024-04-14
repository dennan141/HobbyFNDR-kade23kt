import Link from "next/link";
import styles from "./Posts.module.css"

export default function SinglePost({ title, body }) {
  return (
    <>
      <div className={styles.singlePost}>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    </>
  );
}
