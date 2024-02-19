import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeConfig } from "./config/them.config";
import AppRouter from "./Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeConfig>
          <AppRouter />
        </ThemeConfig>
      </BrowserRouter>
    </>
  );
}

export default App;
