import react from "react";
import { Menu } from "./components/header/index.js";
import { GlobalStyle } from "./styles/global.js";
import { About } from "./components/main/about/index.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Menu></Menu>
      <About></About>
      <Menu></Menu> 
    </div>
  );
}

export default App;
