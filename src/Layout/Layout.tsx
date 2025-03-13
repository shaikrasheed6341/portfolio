
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
import Dashboard from '../Componets/Dashboard/Dashboard';
import Navbar from '../Componets/Navbar/Navbar';
function Layout() {
  return (
    <div><Backgroundcomponent />
    
      <Navbar />
      
        <Dashboard />


    </div>
  )
}

export default Layout