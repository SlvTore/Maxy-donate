import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './content.css';
import { useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

function Content() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);

  const handleClick = () => {
        window.location.href ="/pembayaran"
    }
    return (
        <>    
                <ParallaxProvider>
                <ParallaxBanner
                    style={{ height: '200px' }}
                    layers={[
                        { image: require('../../../assets/group-of-little-asian-girl-enjoy-to-play-petanque-2023-11-27-05-28-46-utc.jpg'), 
                          speed: -10,
                            amount: 0.4,
                            children:(<div className='overlay1'></div>),
                         },
                    ]}
                >
                    <div className="absolute inset-0 flex items-center justify-center  " >
                      <h1 className="text-8xl text-white bg-gray-100 font-thin text-center" style={{ marginTop: '75px' }}>
                        Buatlah Perubahan Sekarang
                      </h1>
                    </div>
            </ParallaxBanner>
            </ParallaxProvider>
            <div className='m-program container-fluid title' style={{ overflow: 'hidden' }}>
                <h1 className='text-center text-white mt-3'>
                    <i className='mb-0 fw-bold '>Program</i>
                </h1>
                <div className='row d-flex justify-content-center px-5'>
                    <div className='col-md-3 '>
                        <div className='card mb-5' style={{ width: "16rem", height: "36rem" }} data-aos="fade-out" data-aos-delay="100">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi1.jpg')} width={230} height={150}></img>
                            </div>
                            <div className='card-body text-center'>
                                <h4 className=' fw-bold'>Minimnya Fasilitas Pendidikan</h4>
                                <p class="card-text">Banyak anak di daerah terpencil tidak memiliki akses ke sekolah dasar yang layak.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                            <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 10.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "70%"}}>70%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 '>
                        <div className='card' style={{ width: "16rem", height: "36rem" }} data-aos="fade-out" data-aos-delay="200">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi2.jpg')} width={230} height={150}></img>
                            </div>
                            <div className='card-body text-center'>
                                <h4 className='text-center fw-bold'>Tiadanya Akses Pendidikan DIgital</h4>
                                <p class="card-text">Kurangnya akses ke teknologi dan internet, terutama di daerah terpencil.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                            <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 15.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "50%"}}>50%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 '>
                        <div className='card' style={{ width: "16rem", height: "36rem" }} data-aos="fade-out" data-aos-delay="200">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi2.jpg')} width={230} height={150}></img>
                            </div>
                            <div className='card-body text-center'>
                                <h4 className='text-center fw-bold'>Terang untuk Belajar
                                </h4>
                                <p class="card-text">Minimnya listrik membuat siswa sulit memanfaatkan perangkat elektronik bahkan lampu penerangan sederhana.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2'>
                            <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 20.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "75%"}}>75%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3'>
                        <div className='card' style={{ width: "16rem", height: "36rem" }} data-aos="fade-out" data-aos-delay="800">
                            <div className='container my-3'>
                                <img src={require('../../../assets/donasi4.jpg')} width={230} height={150}></img>
                            </div>
                            <div className='card-body text-center'>
                                <h4 className=' fw-bold'>Akses Siswa Difabel</h4>
                                <p class="card-text">Kurangnya sekolah inklusif atau fasilitas yang mendukung kebutuhan anak berkebutuhan khusus.</p>
                            </div>
                            <div className='m-dana d-flex justify-content-center m-2 p-1'>
                            <div className='container'>
                                    <p>Dana Terkumpul</p>
                                    <p className='fw-bold'>Rp 10.000.000 </p>
                                    <div className="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "70%"}}>70%</div>
                                    </div>
                                    <button onClick={handleClick} type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ParallaxProvider>
              <ParallaxBanner
                layers={[
                  {
                    image: require('../../../assets/cheerful-elementary.jpg'),
                    speed: -10,
                    amount: 0.8,
                    children: <div className="overlay2"></div>,
                  },
                ]}
                style={{ height: '500px' }}
              >
                <div className="absolute inset-0 flex items-center justify-center ">
                  <div className="row text-center d-flex align-items-center justify-content-center" style={{ marginTop: '115px' }}>
                    <div className="col-md-4 text-white ">
                      <img src={require('../../../assets/user icon.png')} alt="Icon 1" width={150} height={150}/>
                      <div style={{ position: 'relative', zIndex: 75, marginBottom: '40px' }}>
                        <h2 className="fw-bold mt-1">Mengembangkan Potensi</h2>
                        <p className="lead fs-6">Membantu anak-anak mengembangkan potensi mereka melalui pendidikan yang berkualitas.</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-white">
                      <img src={require('../../../assets/love hand.png')} alt="Icon 2" width={150} height={150} />
                      <div style={{ position: 'relative', zIndex: 75 }}>
                        <h2 className="fw-bold mt-1">Membantu yang Membutuhkan</h2>
                        <p className="lead fs-6">Membantu anak-anak yang kurang mampu untuk memiliki keahlian dan pengetahuan yang dibutuhkan.</p>
                      </div>
                    </div>
                    <div className="col-md-4 text-white ">
                      <img src={require('../../../assets/shield icon.png')} alt="Icon 3" width={150} height={150} />
                      <div style={{ position: 'relative', zIndex: 75}}>
                        <h2 className="fw-bold mt-1 ">Melindungi Masa Depan untuk Indonesia</h2>
                        <p className="lead fs-6">Melindungi masa depan anak-anak dengan memberikan mereka akses ke pendidikan yang berkualitas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ParallaxBanner>
            </ParallaxProvider>
        
        </>
       
    );
}

export default Content;