import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Switch, Route } from 'react-router-dom';

function Nav() {
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap" rel="stylesheet" />

            <nav className='navbar navbar-expand-md bg-body-tertiary d-flex' style={{ fontFamily: 'Poppins, sans-serif' }}>
                <div className='container-fluid'>
                    <img src={require('../../assets/logodonate.png')} height={90} width={90} className='mx-2' />
                    <div className='d-flex flex-column'>
                        {/* Styling for "Maxy Donate" */}
                        <Link to="/" className="navbar-brand mb-0 h1" style={{ 
                            fontFamily: 'Poppins, sans-serif', 
                            fontWeight: '600',  
                            fontSize: '1.8rem', 
                            color: '#2c3e50',
                            letterSpacing: '2px', 
                            textTransform: 'uppercase',  
                            transition: 'color 0.3s ease',
                            textDecoration: 'none' 
                        }}>
                            Maxy Donate
                        </Link>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" style={{ color: '#2c3e50' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/aboutus" className="nav-link active" aria-current="page" style={{ color: '#2c3e50' }}>Tentang Kami</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-outline-secondary btn-sm m-1">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/regist" className="btn btn-dark btn-sm m-1">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <style>
                {`
                    .navbar-brand:hover, .nav-link:hover {
                        color: #e74c3c;  // A vibrant red color for hover effect
                        text-decoration: none;
                    }
                `}
            </style>
        </>
    );
}

export default Nav;
