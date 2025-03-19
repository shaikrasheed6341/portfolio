import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Dashboard from "./Componets/Dashboard/Dashboard";
import Techstack from "./Componets/Techstack/Techstack";
import Project from "./Componets/Project/Project";
import Contactme from "./Componets/Contactme/Contactme";
import Aboutus from "./Componets/Aboutme/Aboutme";
import Quation from "./Componets/Quations/Quation";
import Doutpage from "./Componets/Doutpage/Doutpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div className="space-y-10">
                <section id="dashboard"><Dashboard /></section>
                <section id="techstack"><Techstack /></section>
                <section id="project"><Project /></section>
                <section id="about"><Aboutus /></section>
                <section id="quotation"><Quation /></section>
                <section id="doubt"><Doutpage /></section>
                <section id="contact"><Contactme /></section>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;