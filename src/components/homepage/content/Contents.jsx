import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './content.css';

function Content() {
    return (
        <>
            <div className='m-program container-fluid my-5'>
                <h1 className='text-center text-white'>
                    <i>Program</i>
                </h1>
                <div className='row p-2'>
                    <div className='col-md-3 my-4'>
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
                                    <button type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 my-4'>
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
                                    <button type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 my-4'>
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
                                    <button type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-3 my-4'>
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
                                    <button type="button" className="btn btn-dark btn-sm my-3
                                    ">Donasi Sekarang</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='m-informasi container-fluid my-3'>
                <h1 className='text-center'>
                    <i>Informasi</i>
                </h1>
                <div className='d-flex justify-content-center my-2 p-5'>
                    <h5 className='text-center fw-normal'>Indonesia memiliki potensi besar dalam bidang pendidikan, namun masih banyak tantangan dalam hal akses dan kualitas pendidikan, terutama di daerah-daerah terpencil. Salah satu kendalanya adalah terbatasnya sumber pendanaan untuk proyek-proyek pendidikan inovatif. Melihat potensi ini, kami ingin mengajak para peserta hackathon untuk mengembangkan sebuah platform digital yang dapat merevolusi cara kita mendanai pendidikan. Platform ini diharapkan dapat menghubungkan para pendonor dengan proyek-proyek pendidikan yang membutuhkan dana, serta menciptakan ekosistem yang transparan dan berkelanjutan.</h5>
                </div>
            </div>
        </>
       
    );
}

export default Content;