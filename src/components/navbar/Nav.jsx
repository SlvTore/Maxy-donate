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
                        <div className='d-flex'>
                            <button type='button' className='btn btn-outline-secondary btn-sm m-1'>Login</button>
                            <button type='button' className='btn btn-dark btn-sm m-1'>Sign Up</button>
                        </div>
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
                            <Link to="/program" className="nav-link active" aria-current="page" >Program</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/informasi" className="nav-link active" aria-current="page">Informasi</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/kontak" className="nav-link active" aria-current="page">Kontak</Link>
                            </li>
                            
                        </ul>
                    
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;