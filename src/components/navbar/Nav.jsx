import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Switch, Route } from 'react-router-dom';

function Nav() {
    return (
        <>
            <nav className='navbar navbar-expand-md bg-body-tertiary d-flex'>
                <div className='container-fluid'>
                    <img src={require('../../assets/Logo-maxy-round.png')} height={50}  width={50} className='mx-2'/>
                    <div className='d-flex flex-column'>
                        <Link to="/" className="navbar-brand mb-0 h1 " >
                         <i className='fw-bold'>Maxy Donate</i> 
                        </Link>
                    </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
        
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/aboutus" className="nav-link active" aria-current="page">Tentang Kami</Link>
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
        </>
    );
}

export default Nav;