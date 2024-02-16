import "./App.css";
import { ThemeConfig } from "./config/them.config";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <ThemeConfig>
        <HomePage />
      </ThemeConfig>
    </>
  );
}

export default App;
