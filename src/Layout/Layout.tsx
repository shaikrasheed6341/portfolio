
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
import Dashboard from '../Componets/Dashboard/Dashboard';
import Navbar from '../Componets/Navbar/Navbar';
import Techstack from '../Componets/Techstack/Techstack';
import Project from '../Componets/Project/Project';
import Aboutus from '../Componets/Aboutme/Aboutme';
import Quation from '../Componets/Quations/Quation';
import Doutpage from '../Componets/Doutpage/Doutpage';
function Layout() {
  return (
    <div><Backgroundcomponent />
    
      <Navbar />
      
        <Dashboard />
        
         <Techstack />

        <Project />
        <Aboutus />
        <Quation />
        <Doutpage />

    </div>
  )
}

export default Layout