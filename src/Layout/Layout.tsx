
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
import Dashboard from '../Componets/Dashboard/Dashboard';
import Navbar from '../Componets/Navbar/Navbar';
import Techstack from '../Componets/Techstack/Techstack';
import Project from '../Componets/Project/Project';
import Aboutus from '../Componets/Aboutme/Aboutme';

function Layout() {
  return (
    <div><Backgroundcomponent />
    
      <Navbar />
      
        <Dashboard />
        
         <Techstack />

        <Project />
        <Aboutus />


    </div>
  )
}

export default Layout