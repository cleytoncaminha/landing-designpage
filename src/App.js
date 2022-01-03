import react from "react";
import { Menu } from "./components/header/index.js";
import { GlobalStyle } from "./styles/global.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Menu></Menu>
    </div>
  );
}

export default App;
