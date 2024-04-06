import Routes from "./routes/index";
import { Provider } from "react-redux";
import store from "../src/stores/store";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
