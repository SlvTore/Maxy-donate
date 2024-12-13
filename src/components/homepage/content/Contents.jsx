import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Button from '@mui/material/Button';
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
                    style={{ height: '200px', marginTop: '50px' }}
                    layers={[
                        { image: require('../../../assets/group-of-little-asian-girl-enjoy-to-play-petanque-2023-11-27-05-28-46-utc.jpg'), 
                          speed: -10,
                            amount: 0.4,
                            children:(<div className='overlay1'></div>),
                         },
                    ]}
                >
                    <div className="absolute inset-0 flex items-center justify-center " >
                      <h1 className="text-8xl text-white bg-gray-100 font-thin text-center" style={{ marginTop: '75px' }}>
                        Buatlah Perubahan Sekarang
                      </h1>
                    </div>
            </ParallaxBanner>
            </ParallaxProvider>
            <div className='m-program container-fluid title'>
                <h1 className='text-center text-white '>
                    <i className='mb-0'>Program</i>
                </h1>
                <div className='row '>
                    <div className='col-md-3 '>
                        <div className='card mb-5' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="100">
                            <div className='container my-3'>
                                <img src={require('../../../assets/Maxy logo.png')} width={260} height={150}></img>
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>MAXY ACADEMY</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <div className='card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="200">
                            <div className='container my-3'>
                                <img src={require('../../../assets/Maxy logo.png')} width={260} height={150}></img>
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>MAXY ACADEMY</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                        <div className='card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="400">
                            <div className='container my-3'>
                                <img src={require('../../../assets/Maxy logo.png')} width={260} height={150}></img>
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>MAXY ACADEMY</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

                    <div className='col-md-3'>
                        <div className='card' style={{ width: "18rem" }} data-aos="flip-right" data-aos-delay="800">
                            <div className='container my-3'>
                                <img src={require('../../../assets/Maxy logo.png')} width={260} height={150}></img>
                            </div>
                            <div className='card-body'>
                                <h4 className='text-center fw-bold'>MAXY ACADEMY</h4>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="row p-5 text-center d-flex align-items-center justify-content-cente" style={{ marginTop: '115px' }}>
                    <div className="col-md-4">
                      <img src={require('../../../assets/user icon.png')} alt="Icon 1" width={150} height={150}/>
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