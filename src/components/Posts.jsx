import imgPost1 from "../assets/Comunistas.svg";
import imgPost2 from "../assets/Comunistas2.svg";
import vinicius from "../assets/vini.svg"
import Post from "./Post";

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
    imagensPost: [imgPost1, imgPost2],
    imagemUser: vinicius
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
          <Post postData={post} />
        ))}
      </ul>
    </div>
  );
}
