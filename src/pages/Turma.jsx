import React, { useEffect, useState } from "react";
import ApiService from "../service/ApiService";

export default function Turma() {
  const { get } = ApiService;
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function fetchAlunos() {
      const response = await get("/usuario/listar");
      if (response.status == 200) {
        setUsuarios(response.data);
      }
    }
    fetchAlunos();
  }, [get, usuarios]);



  return (
    <div className="flex flex-col justify-center items-center min-w-screen min-h-screen gap-y-5 bg-body p-10">
      <h1 className="text-roxo_destaque font-bold text-[48px]">Turma</h1>
      <ul className="grid grid-cols-2 h-fit bg-white rounded-[10px] px-10 py-8 gap-x-20 gap-y-10">
        {usuarios.map((usuario) => (
          <li className="flex flex-col">
            <div className="flex gap-x-4 items-center">
              <p className="flex items-center justify-center bg-roxo_destaque text-white font-bold text-[16px] rounded-full p-1">{usuario.nome?.slice(0, 2).toUpperCase()}</p>
              <p className="text-[20px] font-bold">{usuario.nome}</p>
            </div>
            <p>{usuario.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
