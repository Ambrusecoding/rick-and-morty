import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeConfig } from "./config/them.config.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeConfig>
    <App />
  </ThemeConfig>
);
