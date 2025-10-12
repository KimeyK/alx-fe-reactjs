import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();

  return (
    <section>
      <h1>Post #{postId}</h1>
      <p>
        This page is rendered with a <code>:postId</code> param in the URL. Try
        changing the number!
      </p>
    </section>
  );
}
