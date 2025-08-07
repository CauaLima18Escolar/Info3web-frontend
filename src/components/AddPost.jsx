import React from "react";
import { useAuth } from "../contexts/Auth";
import { Icons } from "../assets/icons";

export default function AddPost() {
  const dataDoUsuario = useAuth();
  console.log(dataDoUsuario.usuario.usuario.nome)

  return (
    <div className="flex flex-col bg-white p-5 w-2xl rounded-[10px] mb-10">
      <div className="flex font-bold text-2xl items-center justify-center mb-4">No que você está pensando?</div>
      <div className="flex gap-2 items-center mb-2">
        <p>img</p>
        <p className="text-roxo_destaque text-[20px]">{dataDoUsuario.usuario.usuario.nome}</p>
      </div>
      <input type="text" className="outline-0 mb-4" placeholder="Fale mal do seu professor...." />
      <button className="flex justify-end mb-1"><Icons.Add/></button>
    </div>
  );
}
