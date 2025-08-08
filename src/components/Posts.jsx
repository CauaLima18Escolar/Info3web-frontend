import Post from "./Post";
import ApiService from "../service/ApiService";
import { useEffect, useState } from "react";


export default function Posts({ id = "" }) {
  const [posts, setPosts] = useState([]);
  const { get } = ApiService;

  const handlePeriodicPosts = async () => {
    const fetch = id 
    ? get(`/post/listar_por_autor_id/${id}`) 
    : get("/post/listar")

    const { data } = await fetch

    setPosts(data.reverse());
  };

  useEffect(() => {
    handlePeriodicPosts();

    const interval = setInterval(() => {
      handlePeriodicPosts();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (posts.length > 0) {
    <p>No posts yet, mate. Como back later</p>;
  }
  return (
    <div>
      <ul className="flex flex-col gap-y-10">
        {posts.map((post) => (
          <Post postData={post} />
        ))}
      </ul>
    </div>
  );
}
