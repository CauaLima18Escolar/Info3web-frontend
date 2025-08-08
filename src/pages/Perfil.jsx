//import React,{ useEffect } from "react"
import vinicius from "../assets/vini.svg"
import Posts from "../components/Posts.jsx"
//import Post from "../components/Post.jsx"

export default function Perfil() {

  const imagemUser = vinicius
  const descUser = "Oi, eu me chamo Vinícius. Sou um completo nerd em história. Se você me perguntar toda a lore de todos os super-heróis do mundo, eu provavelmente vou saber."
  const nomeUser = "Vinícius Alves"
  /*const autor = Post.autor

  useEffect(() => {
    async function fetchAlunos() {
      const response = await get("/usuario/listar");
      if (response.status == 200) {
        setUsuarios(response.data);
      }
    }
    fetchAlunos();
  }, [get, usuarios]);*/

  return (
    <div className="min-h-screen bg-body flex justify-center items-center p-8 text-center">
        <div className="flex flex-col">
            <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={imagemUser}
                alt="Foto de perfil"
            />
            <h1 className="text-4xl font-semibold text-roxo_destaque">{nomeUser}</h1>
            <p className="text-semibold text-xl mb-20">{descUser}</p>
            <h1 className="text-4xl font-semibold text-roxo_destaque mb-5">Posts</h1>
            <div className=" bg-body flex justify-center items-center text-center">
              <Posts/>
            </div>
        </div> 
    </div>
  );
}