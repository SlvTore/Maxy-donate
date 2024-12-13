import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const DataProgram = () => {
    return (
        <div className="container my-3">
            <h1 className='fw-bold text-primary'>Data Programs</h1>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='mb-0'>
                    <h4 className='fw-bold text-primary'>Program Donasi : Edukasi Literasi</h4>
                    <figure className="figure mb-0">
                    <img src={require("../../../assets/donasi2.jpg")} class="figure-img img-fluid rounded" alt="..." />
                    </figure>
                    </div>
                    <div className='container bg-primary-subtle p-4 text-center rounded mt-0'>
                        <h5 className='mb-3'>Total Dana Terkumpul</h5>
                        <h6 className='fw-bold'>Rp. 10.000.000</h6>
                        <div className="progress " role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: "10%"}}>10%</div>
                        </div>
                        <p className='text-end my-1'>Dari Rp. 150.000.000</p>
                    </div>
                </div>
                <div className='col-md-6 '>
                    <h1 className='fw-bold text-primary text-center'>Edukasi Literasi</h1>
                    <h4 className='fw-semibold text-primary text-center'>Program pemberdayaan anak-anak pelajar SD Harapan Bangsa di Kota X.
                    Donasi Anda, membantu mereka untuk terus menggapai mimpi mereka.</h4>
                </div>
            </div>


        </div>
    )
}

export default DataProgram;