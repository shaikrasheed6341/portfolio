
// Layout.tsx (temporary)
import { Outlet } from 'react-router-dom';
import Navbar from '../Componets/Navbar/Navbar';
import Footer from '../Componets/Footer/Footer';
import Backgroundcomponent from '../Componets/Backgroundcomponent/Backgroundcomponent';
function Layout() {
  return (
    <>
      <Backgroundcomponent />
      <Navbar />
      <main>
        <Outlet />
        
      </main>
      <Footer />
    </>
  );
}

export default Layout;