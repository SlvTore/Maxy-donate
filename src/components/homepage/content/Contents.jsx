import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './content.css';
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';

function Content() {

    const handleClick = () => {
        window.location.href ="/pembayaran"
    }
    return (
        <>
            <div className='m-program container-fluid title'>
                <h1 className='text-center text-white '>
                    <i className='mb-0'>Program</i>
                </h1>
                <div className='row '>
                    <div className='col-md-3 '>
                        <div className='card mb-5' style={{ width: "18rem" }}>
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
                        <div className='card' style={{ width: "18rem" }}>
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
                        <div className='card' style={{ width: "18rem" }}>
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
                        <div className='card' style={{ width: "18rem" }}>
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
                    { image: require('../../../assets/cheerful-elementary.jpg'), 
                      speed: -10,
                        amount: 0.8,
                        children:(<div className='overlay'></div>),
                     },
                    
                ]}
                style={{height: '500px' }}
                >
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-8xl text-white bg-gray-100 font-thin p-2 text-center">Hello World!</h1>
                </div>
             </ParallaxBanner>
            </ParallaxProvider>
        </>
       
    );
}

export default Content;