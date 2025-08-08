import imgPost1 from "../assets/Comunistas.svg";
import imgPost2 from "../assets/Comunistas2.svg";
import vinicius from "../assets/vini.svg";
import Post from "./Post";
import ApiService from "../service/ApiService";
import { useEffect, useState } from "react";

const postMocado = [
  {
    id: 1,
    nomeUser: "Vini A.",
    conteudo:
      "Então, vocês sabiam que aqui no Brasil, durante o período de 1972 a 1975, aconteceu a Guerra da Araguaia? Basicamente foi um conflito envolvendo comunistas e o exército do Brasil, no meio da ditadura, e iss...",
    imagensPost: [imgPost1, imgPost2],
    imagemUser: vinicius,
  },
];

export default function Posts() {
  const [posts, setPosts] = useState(postMocado);
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
