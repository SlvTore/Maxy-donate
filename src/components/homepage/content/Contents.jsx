import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './content.css';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

function Content() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleClick = () => {
        window.location.href = "/pembayaran";
    };

    return (
        <>
            <ParallaxProvider>
                <ParallaxBanner
                    style={{ height: '200px', marginTop: '50px' }}
                    layers={[{ 
                        image: require('../../../assets/group-of-little-asian-girl-enjoy-to-play-petanque-2023-11-27-05-28-46-utc.jpg'),
                        speed: -10, amount: 0.4, children: (<div className='overlay1'></div>),
                    }]}
                >
                    <div className="absolute inset-0 flex items-center justify-center ">
                        <h1 className="text-8xl text-white bg-gray-100 font-thin text-center" style={{ marginTop: '75px' }}>
                            Buatlah Perubahan Sekarang
                        </h1>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>

            <div className='m-program container-fluid title'>
                <h1 className='text-center text-white'>
                    <b><i className='mb-0'>Program</i></b>
                </h1>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card mb-5 program-card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="100">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi1.jpg')} width={260} height={150} alt="donasi" />
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>Kurangnya Fasilitas Pendidikan</h4>
                                <p className="card-text">Banyak anak di daerah terpencil tidak memiliki akses ke sekolah dasar yang layak.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                                <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 10.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "70%" }}>70%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3">Donasi Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='card mb-5 program-card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="200">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi2.jpg')} width={260} height={150} alt="donasi" />
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>Tiadanya Akses Pendidikan Digital</h4>
                                <p className="card-text">Kurangnya akses ke teknologi dan internet, terutama di daerah terpencil.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                                <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 15.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "50%" }}>50%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3">Donasi Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='card mb-5 program-card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="300">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi3.jpg')} width={260} height={155} alt="donasi" />
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>Terang untuk Belajar</h4>
                                <p className="card-text">Minimnya listrik membuat siswa sulit memanfaatkan perangkat elektronik bahkan lampu penerangan sederhana.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                                <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 20.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "75%" }}>75%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3">Donasi Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='card mb-5 program-card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="400">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi4.jpg')} width={260} height={155} alt="donasi" />
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>Akses Siswa Difabel</h4>
                                <p className="card-text">Kurangnya sekolah inklusif atau fasilitas yang mendukung kebutuhan anak berkebutuhan khusus.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                                <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 25.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: "100%" }}>100%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3">Donasi Sekarang</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ParallaxProvider>
                <ParallaxBanner
                    layers={[{
                        image: require('../../../assets/cheerful-elementary.jpg'),
                        speed: -10, amount: 0.8, children: <div className="overlay2"></div>,
                    }]}
                    style={{ height: '500px' }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="row p-5 text-center d-flex align-items-center justify-content-center" style={{ marginTop: '115px' }}>
                            <div className="col-md-4">
                                <img src={require('../../../assets/user icon.png')} alt="Icon 1" width={150} height={150} />
                            </div>
                            <div className="col-md-4">
                                <img src={require('../../../assets/love hand.png')} alt="Icon 2" width={150} height={150} />
                            </div>
                            <div className="col-md-4">
                                <img src={require('../../../assets/shield icon.png')} alt="Icon 3" width={150} height={150} />
                            </div>
                        </div>
                    </div>
                </ParallaxBanner>
            </ParallaxProvider>
        </>
    );
}

export default Content;
