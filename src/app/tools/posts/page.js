import SinglePost from "@/Components/Posts/Posts";
import styles from "./posts.module.css";

// *  ------------- PROP DATA ------------
const postsArray = [
  {
    title: "Spela Drakar och Demoner",
    body: "Hej! Jag hade velar spela drakar och demoner och kommer att leda gruppen, anslut oss gärna!",
    user: "Username1",
  },
  {
    title: "Fixa trädgård",
    body: "Jag önskar att någon kunde fixa iordning min trädgård, jag erbjduer 500 kronor om ni planterar mina blommor jag köpt på ett snyggt sätt",
    user: "Username2",
  },
  {
    title: "Spela Tennis",
    body: "Jag kan spela tennis och det är kul men jag kan inte spela tennis själv, hjälp mig ASAP",
    user: "Username3",
  },
  {
    title: "Fiska är kul men...",
    body: "... det är dyrt med bensin, om någon följer med mig och betalar 400 kronor så kan jag fiska mer och lära er samtidigt.",
    user: "Username3",
  },
  {
    title: "Sticka ihop",
    body: "The body of the post can be a longer portion explaining stuf lorem ipsum",
    user: "Username3",
  },
  {
    title: "Springa ensam på natten? nej tack",
    body: "Häng med mig och spring så det inte blir läskigt 😱",
    user: "Username3",
  },
];

export default function ProfilePage() {
  return (
    <>
      <h1>Annonser sidan</h1>

      <p>
        Här är ett exempel som visar hur annonser hade kunnat se ut på sidan
      </p>

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
