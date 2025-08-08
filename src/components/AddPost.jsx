import { useAuth } from "../contexts/Auth";
import { Icons } from "../assets/icons";
import { useState } from "react";
import ApiService from "../service/ApiService";

export default function AddPost() {
  const [conteudo, setConteudo] = useState("");
  const { postFile } = ApiService
  const dataDoUsuario = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!conteudo.trim()) {
      alert("Por favor, escreva algo antes de enviar.");
      return;
    }

    const formData = new FormData();
    formData.append("conteudo", conteudo);
    formData.append("autor_id", dataDoUsuario?.usuario?.usuario?.id);

    await postFile("/posts/criar", formData)
  }
  // Extrai as duas primeiras letras do nome em maiúsculas
  const iniciais = dataDoUsuario?.usuario?.usuario?.nome
    ?.slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col w-2xl bg-white p-5 rounded-[10px] mb-10 shadow-md">
      <div className="flex font-bold text-2xl items-center justify-center mb-4 text-gray-800">
        No que você está pensando?
      </div>

      <div className="flex gap-3 items-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 bg-purple-600 rounded-full text-white font-bold">
          {iniciais}
        </div>

        <p className="text-purple-600 text-[20px] font-medium">
          {dataDoUsuario?.usuario?.usuario?.nome || "Usuário"}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          id="post"
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4 resize-none h-32"
          placeholder="Fale mal do seu professor..."
          value={conteudo}
          onChange={(e) => setConteudo(e.target.value)}
        />

        <div className="flex justify-end">
          <button className="duration-400 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <Icons.Add className="text-purple-600 w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
}
