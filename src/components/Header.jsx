import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Collapse } from 'bootstrap';
const Header = () => {
  const location = useLocation();
  useEffect(() => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      new Collapse(navbarCollapse).hide();
    }
  }, [location.pathname]);
    return (
         <>
    <nav className="navbar header navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <Link to='/' className='navbar-brand'> <img src="/logo.png" alt="logo" className="logo" /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* dropdown items */}
            <li className="nav-item dropdown">
             
                 <Link to='/self-care' className='header-links nav-link'>Self-care</Link>
            
            </li>
           {/* separation */}
            <li className="nav-item ">
        
                  <Link to='/life-style' className='header-links nav-link'>Life-style</Link>
             
            </li>
            {/* separation */}
            <li className="nav-item ">
             
                  <Link to='/self-improvment' className='header-links nav-link'>Self-improvment</Link>
              
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  </>
    )
 
};
export default Header;
