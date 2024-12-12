import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './programs.css';

function Programs() {
    const handleClick = () => {
        window.location.href ="/pembayaran"
    }
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Program Lainnya</h1>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-4 my-4'>
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

                    <div className='col-md-4 my-4'>
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

                    <div className='col-md-4 my-4'>
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

                                        <div className='col-md-4 my-4'>
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
                            </div>
                        );
                    }
                    
                    export default Programs;