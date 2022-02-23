
import { Menu } from "./components/header/index.js";
import { GlobalStyle } from "./styles/global.js";
import { About } from "./components/main/about/index.js";
import { Projects } from "./components/main/projects/index.js";
import { Contact } from "./components/footer/contacts/index.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Menu></Menu>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
