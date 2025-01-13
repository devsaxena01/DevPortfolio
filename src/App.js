import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";


function App() {
  return (
    <div>
      <Layout/>
      <div className="container">
      <About/>
      <Techstack/>
      <Projects/>
      </div>
    </div>
  );
}

export default App;
