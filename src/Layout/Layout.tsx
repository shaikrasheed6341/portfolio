
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
import Dashboard from '../Componets/Dashboard/Dashboard';
import Navbar from '../Componets/Navbar/Navbar';
import Techstack from '../Componets/Techstack/Techstack';
import Projects from '../Componets/Projects/Projects';

function Layout() {
  return (
    <div><Backgroundcomponent />
    
      <Navbar />
      
        <Dashboard />
        
         <Techstack />
        <Projects />


    </div>
  )
}

export default Layout