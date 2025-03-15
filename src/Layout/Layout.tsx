
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
import Dashboard from '../Componets/Dashboard/Dashboard';
import Navbar from '../Componets/Navbar/Navbar';
import Techstack from '../Componets/Techstack/Techstack';
import Project from '../Componets/Project/Project';

function Layout() {
  return (
    <div><Backgroundcomponent />
    
      <Navbar />
      
        <Dashboard />
        
         <Techstack />

        <Project />


    </div>
  )
}

export default Layout