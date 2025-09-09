import { Link } from 'react-router-dom';
const Header = () => {
    return (
         <>
    <nav className="navbar header navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
          <Link to='/' className='navbar-brand'> <img src="logo.png" alt="logo" className="logo" /></Link>
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
              <a
              className="nav-link "
                href="#"
                  role="button"
              >
                 <Link to='/self-care' className='header-links'>Self-care</Link>
              </a>
            </li>
           {/* separation */}
            <li className="nav-item ">
              <a
                className="nav-link "
                href="#"
                  role="button"

              >
                  <Link to='/life-style' className='header-links'>Life-style</Link>
              </a>
            </li>
            {/* separation */}
            <li className="nav-item ">
              <a
                className="nav-link"
                href="#"
                role="button"
              >
                  <Link to='/self-improvment' className='header-links'>Self-improvment</Link>
              </a>
          
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
    )
 
};
export default Header;
