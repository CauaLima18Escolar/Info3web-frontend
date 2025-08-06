import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Contexts from "./contexts/Index.jsx";
import App from "./app.jsx";

createRoot(document.getElementById("root")).render(
  <Contexts>
    <StrictMode>
      <App />
    </StrictMode>
  </Contexts>
);
