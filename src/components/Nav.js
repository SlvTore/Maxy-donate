import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='navbar navbar-expand-md bg-body-tertiary d-flex'>
                <div className='container-fluid'>
                    <a className="navbar-brand mb-0 h1 " href="#">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="bi bi-search"></i>
                        </button>
                    </form>
                    <div
                        className="collapse navbar-collapse d-flex justify-content-end"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/program" className="nav-link active" aria-current="page">
                                    Program
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/informasi" className="nav-link active" aria-current="page">
                                    Informasi
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kontak" className="nav-link active" aria-current="page">
                                    Kontak
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active" aria-current="page">
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link active" aria-current="page">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/regist" className="nav-link active" aria-current="page">
                                    Regist
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
