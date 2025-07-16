import "./index.css";
import feijao from "./assets/feijao.svg";

export default function Cadastro() {
  return (
    <body className="h-screen flex items-center justify-center bg-body">
      <div className="relative z-10 bg-white bg-opacity-80 py-8 px-4 rounded-lg text-center shadow-xl">
        <div className="flex flex-col gap-y-[16px] px-10">
          <h1 className="text-roxo_destaque text-left text-[28px] font-bold border-b-3">
            Faça seu cadastro
          </h1>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Nome:</h1>
            <input
              placeholder="Insira seu nome"
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            ></input>
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Matricula:</h1>
            <input
              placeholder="Insira sua matrícula"
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            ></input>
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">E-mail:</h1>
            <input
              placeholder="Insira seu e-mail"
              className="w-[280px] px-2 py-1 rounded-lg border-1"
            ></input>
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h1 className="text-left font-medium">Senha:</h1>
            <input
              placeholder="Insira sua senha"
              className="px-2 py-1 rounded-lg border-1"
            ></input>
          </div>
          <div className="flex flex-col gap-y-[16px]">
            <button className="bg-roxo_destaque rounded-lg text-white py-2">
              Enviar
            </button>
            <h1 className="flex items-center justify-center">
              Já tem conta?
              <button className="px-1 cursor-pointer text-roxo_destaque border-b">
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
    </body>
  );
}
