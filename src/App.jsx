import { useState } from "react";
import "./index.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <body className="h-screen flex items-center justify-center bg-body">
      <div className="bg-white text-center ">
        <h1 className="text-home">Faça seu Login</h1>
      </div>
    </body>
  );
}
