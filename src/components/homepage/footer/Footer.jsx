import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './footer.css';
import {  Link } from 'react-router-dom';

function Footer () {
    return (
    <>
         <div className= 'container-fluid' style={{ backgroundColor: '#102A3E' }}>
            <div className='row'>
                <div className='col-md-8 my-3'>
                    <div className='row'>
                        <h2 className=' mx-3 fs-1' style={{ color: '#FFC962' }}>Kontak</h2>
                        <div className='col-md-8'>
                            <div className='row'>
                                <div className="bi bi-instagram mx-3 text-white" style={{ fontSize: '2rem' }}>  
                                    <a href='#' className='text-reset mx-2'>Instagram</a>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="bi bi-whatsapp mx-3 text-white" style={{ fontSize: '2rem' }}  >  
                                    <a href='#' className='text-reset mx-2'>Whatsapp</a>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="bi bi-envelope-fill mx-3 text-white" style={{ fontSize: '2rem' }}>  
                                    <a href='#' className='text-reset mx-2'>E-Mail</a>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4  text-white'>
                            <h3 className='mx-5' style={{color : '#FFC962'}}>Company</h3>
                            <div className='row '>
                               <div className='d-flex flex-column'>
                                 <div className='mx-5'>
                                   <Link to={"/"} className='text-white' style={{textDecoration: 'none', fontSize: '1.5rem'}}>Home</Link>
                                 </div>
                                 <div className='mx-5'>
                                   <Link to={"/aboutus"} className='text-white' style={{textDecoration: 'none', fontSize: '1.5rem'}}>Tentang Kami</Link>
                                 </div>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-3 mx-2'>
                        <h3 style={{color : '#FFC962'}}>Alamat</h3>
                        <p className='text-white'><strong>JI Keceriaan No. 7, RT 1, RW 2, Desa Tertawa Bahagia, Kecamatan Ceria, Kota Senyum Sejahtera, Kabupaten
                        Gembira, Provinsi Suka Hati, Indonesia.</strong></p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-end align-items-end mb-4 my-3fs-1' style={{color : '#FFC962'}}>
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