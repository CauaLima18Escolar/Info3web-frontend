import "../index.css";
import feijao from "../assets/feijao.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/Auth";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");

  const irParaCadastro = () => {
    navigate("/cadastro");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login({ matricula, senha });
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="relative z-10 bg-white bg-opacity-80 py-8 px-4 rounded-lg text-center shadow-xl h-max-64">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-y-20 px-10"
        >
          <h1 className="text-roxo_destaque text-left text-[28px] font-bold border-b-3">
            Faça seu Login
          </h1>

          <fieldset>
            <div className="flex flex-col gap-y-2 mb-4">
              <h1 className="text-left font-medium">Matrícula:</h1>
              <input
                placeholder="Insira sua matrícula"
                className="w-[280px] px-2 py-1 rounded-lg border-1"
                value={matricula}
                onChange={(e) => setMatricula(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-y-2">
              <h1 className="text-left font-medium">Senha:</h1>
              <input
                placeholder="Insira sua senha"
                className="px-2 py-1 rounded-lg border-1"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-roxo_destaque rounded-lg cursor-pointer text-white py-2"
          >
            Enviar
          </button>

          <div className="flex gap-y-[16px] itens-center justify-center">
            <h1 className="flex items-center justify-center">Não tem conta?</h1>
            <button
              type="button"
              className="px-1 cursor-pointer text-roxo_destaque border-b"
              onClick={irParaCadastro}
            >
              Faça seu cadastro
            </button>
          </div>
        </form>
      </div>

      <img
        src={feijao}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />
    </div>
  );
}
