import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './footer.css';
import {  Link } from 'react-router-dom';

function Footer () {
    return (
    <>
         <div className='container-fluid bg-secondary'>
            <div className='row'>
                <div className='col-md-8 my-3'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='row'>
                                <div className="bi bi-instagram mx-3" style={{ fontSize: '2rem' }}>  
                                    <a href='#' className='text-reset mx-2'>Instagram</a>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="bi bi-whatsapp mx-3" style={{ fontSize: '2rem' }}  >  
                                    <a href='#' className='text-reset mx-2'>Whatsapp</a>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="bi bi-envelope-fill mx-3" style={{ fontSize: '2rem' }}>  
                                    <a href='#' className='text-reset mx-2'>E-Mail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 mt-4'>
                            <div className='row'>
                                <div className='col-6'style={{ fontSize: '1.5rem' }} >
                                    <Link to={"#"} className='text-reset mx-2' style={{textDecoration: 'none'}}>About us</Link>
                                </div>
                                <div className='col-6'style={{ fontSize: '1.5rem' }} >
                                    <Link to={"#"} className='text-reset mx-2' style={{textDecoration: 'none'}}>Informasi</Link>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'style={{ fontSize: '1.5rem' }} >
                                    <Link to={"#"} className='text-reset mx-2' style={{textDecoration: 'none'}}>Program</Link>
                                </div>
                                <div className='col-6' style={{ fontSize: '1.5rem' }}>
                                    <Link to={"#"} className='text-reset mx-2' style={{textDecoration: 'none'}}>FAQ</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <p><strong>JI Keceriaan No. 7, RT 1, RW 2, Desa Tertawa Bahagia, Kecamatan Ceria, Kota Senyum Sejahtera, Kabupaten
                        Gembira, Provinsi Suka Hati, Indonesia.</strong></p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-end align-items-end mb-4 my-3 '>
                    <h1 className='fw-bold'>Maxy <br />Donate</h1>
                </div>
                <div className='container-fluid bg-dark'>
                   <div className='row d-flex justify-content-center text-center mt-3'>
                        <p className='text-white'>Copyright &copy; 2023 Maxy Donate</p>
                   </div>
                </div>
            </div>
        </div> 
        
        

     </>
    )
}

export default Footer;