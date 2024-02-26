import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { ThemeConfig } from "./config/them.config";
import AppRouter from "./Router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import EpisodesProvider from "./pages/episodes/context/Provider";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeConfig>
          <BrowserRouter>
            <EpisodesProvider>
              <AppRouter />
            </EpisodesProvider>
          </BrowserRouter>
        </ThemeConfig>
      </Provider>
    </>
  );
}

export default App;
