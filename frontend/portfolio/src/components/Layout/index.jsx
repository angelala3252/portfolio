import './style.css';
import { Link, useLocation, Outlet } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="page-container">
      <header>
        <p id="left">Angela Zhuo</p>
        <nav id="right">
          <Link to="/" className={currentPath === '/home' ? 'active' : ''}>Home</Link>
          <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About</Link>
          <Link to="/projects" className={currentPath === '/projects' ? 'active' : ''}>Projects</Link>
          <Link to="/photography" className={currentPath === '/photography' ? 'active' : ''}>Photography</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
