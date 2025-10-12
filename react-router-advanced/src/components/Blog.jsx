import { Link } from "react-router-dom";

const mockPosts = [
  { id: 1, title: "Hello Router" },
  { id: 2, title: "Nested Routes FTW" },
  { id: 3, title: "Protected Routes Demo" },
];

export default function Blog() {
  return (
    <section>
      <h1>Blog</h1>
      <ul>
        {mockPosts.map((p) => (
          <li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
