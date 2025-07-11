import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <body className="flex flex-col items-center justify-center bg-body">
      <div className="justify-center items-center mt-[220px] mr-[630px] bg-white text-center ">
        <h1 className="text-home">Faça seu Login</h1>
      </div>
    </body>
  );
}
