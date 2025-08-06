import React from "react";
import Post from "./Post";
import imgPost1 from "../assets/Comunistas.svg";
import imgPost2 from "../assets/Comunistas2.svg";
import imgPost12 from "../assets/aparecida.png";
import imgPost22 from "../assets/aparecida2.png"
import vinicius from "../assets/vini.svg"
import carlos from "../assets/carlos.svg"

const posts = [
  {
    id: 1,
    nomeUser: "Vini A.",
    conteudo:
      "Então, vocês sabiam que aqui no Brasil, durante o período de 1972 a 1975, aconteceu a Guerra da Araguaia? Basicamente foi um conflito envolvendo comunistas e o exército do Brasil, no meio da ditadura, e iss...",
    imagensPost: [imgPost1, imgPost2],
    imagemUser: vinicius
  },
  {
    id: 2,
    nomeUser: "Carlos.",
    conteudo:
      "Ei namoral aquela professora lá, chatona irmão Nau águento mais a aula dela, bglh ta ficando sobrenatural ja de tanta aula sobrenaturalmente ruim que ela da ",
    imagensPost: [imgPost12, imgPost22],
    imagemUser: carlos
  },
];

export default function Posts() {
  if (posts.length > 0 ) {
    <p>No posts yet, mate. Como back later</p>
  }
  return (
    <div>
      <ul className="flex flex-col gap-y-10">
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </ul>
    </div>
  );
}
