import "../index.css";
import feijao from "../assets/feijao.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiService from "../service/ApiService";



export default function Cadastro() {
const { post } = ApiService;
const [nome, setNome] = useState("");
const [matricula, setMatricula] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");

const enviarCadastro = async () => {
  try {
    const resposta = await post("/auth/registro", { nome, matricula, email, senha });
    alert(resposta.data.detail);
  } catch (err) {
    alert("Erro ao enviar cadastro: " + err.response.data?.detail ?? "Erro desconhecido");
  }
};

const navigate = useNavigate()
  const irParaLogin = () => {
    navigate('/')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-body">
      <div className="relative z-10 bg-white bg-opacity-80 py-8 px-4 rounded-lg text-center shadow-xl h-max-64">
        <div className="flex flex-col gap-y-[16px] px-10">
          <h1 className="text-roxo_destaque text-left text-[28px] font-bold border-b-3">
            Faça seu cadastro
          </h1>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Nome:</h1>
            <input
              placeholder="Insira seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            />
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Matricula:</h1>
            <input
              placeholder="Insira sua matricula"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            />
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">E-mail:</h1>
            <input
              placeholder="Insira seu E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            />
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Senha:</h1>
            <input
              placeholder="Insira sua senha"
              value={senha}
              type="password"
              onChange={(e) => setSenha(e.target.value)}
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            />
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <button className="bg-roxo_destaque rounded-lg text-white py-2" onClick={ enviarCadastro } >
              Enviar
            </button>
            <h1 className="flex items-center justify-center">
              Já tem conta?
              <button className="px-1 cursor-pointer text-roxo_destaque border-b" onClick={ irParaLogin }>
                Faça login
              </button>
            </h1>
          </div>
        </div>
      </div>
      <img
        src={feijao}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
    </div>
  );
}
