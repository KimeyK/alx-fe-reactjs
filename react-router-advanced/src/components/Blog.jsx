// src/components/BlogPost.jsx
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return (
    <section style={{ padding: 24 }}>
      <h2>Blog Post #{id}</h2>
      <p>This is a dynamic route example rendered for /blog/{id}.</p>
    </section>
  );
}
