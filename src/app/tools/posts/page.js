import SinglePost from "@/Components/Posts/Posts";
import styles from "./posts.module.css";

const postsArray = [
  {
    title: "First Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username1",
  },
  {
    title: "second Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username2",
  },
  {
    title: "third Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username3",
  },
  {
    title: "Example Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username3",
  },
  {
    title: "Example Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username3",
  },
  {
    title: "Example Title",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username3",
  },
];

export default function ProfilePage() {
  return (
    <>
      <h1>Annonser sidan</h1>

      {/* //* This creates the posts "dynamically" */}
      {postsArray.map((post, index) => (
        <SinglePost key={index} title={post.title} body={post.body} />
      ))}
    </>
  );
}

// TODO: Consider implementing
function randomNumberOfPosts() {
  return Math.ceil(Math.random * 10);
}
