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
              <>
                <Dashboard />
                <Techstack />
                <Project />
                <Aboutus />
                <Quation />
                <Doutpage />
                <Contactme />
              </>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;