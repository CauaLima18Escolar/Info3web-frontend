import Post from "./Post";
import ApiService from "../service/ApiService";
import { useEffect, useState } from "react";


export default function Posts() {
  const [posts, setPosts] = useState([]);
  const { get } = ApiService;

  const handlePeriodicPosts = async () => {
    const { data } = await get("/post/listar");
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
