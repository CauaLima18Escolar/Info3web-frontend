import Posts from "../components/Posts.jsx";
import { useAuth } from "../contexts/Auth.jsx";
//import Post from "../components/Post.jsx"

export default function Perfil() {
  const { usuario } = useAuth();

  // Extrai as duas primeiras letras do nome em maiúsculas
  const iniciais = usuario.usuario.nome?.slice(0, 2).toUpperCase();

  return (
    <div className="min-h-screen bg-body flex justify-center items-center p-8">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex items-center justify-center w-28 h-28 bg-purple-600 rounded-full text-white text-5xl font-bold">
            {iniciais}
          </div>

          <div>
            <h1 className="text-3xl font-semibold text-roxo_destaque mb-2">
              {usuario.usuario.nome}
            </h1>
            <p className="text-semibold text-sm text-wrap max-w-2xl">
              {usuario.usuario.bio} Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus, suscipit. Repudiandae aspernatur
              dicta dolore dolorem, vero doloribus unde rem eius beatae nemo
              quos deserunt ex accusamus tempore voluptate facilis voluptatum!
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-semibold text-roxo_destaque mb-5">
          Seus posts
        </h1>

        <div className=" bg-body flex justify-center items-center">
          <Posts id={usuario.usuario.id}/>
        </div>
      </div>
    </div>
  );
}
