import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import "../style.css";

const Layout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/photography", label: "Photography" },
  ];

  return (
    <div className="page-container">
      <header>
        <p id="left">Angela Zhuo</p>

        {/* Desktop Nav */}
        <nav id="right">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={currentPath === link.to ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="mobile-nav">
          <button
            className="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
          {mobileMenuOpen && (
            <div className="mobile-menu">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={currentPath === link.to ? "active" : ""}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <Outlet />
    </div>
  );
};

export default Layout;
