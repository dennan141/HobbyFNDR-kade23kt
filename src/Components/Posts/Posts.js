import Link from "next/link";



export default function SinglePost({ title, body }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{body}</p>
    </>
  );
}
