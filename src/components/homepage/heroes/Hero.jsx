import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './herohome.css';

function Hero() {
    return (
        <div className="hero-container" style={{ position: 'relative' }}>
            <img 
                src={require('../../../assets/hands.png')} 
                className="hero-image" 
                alt="Hands holding a heart" 
                loading="lazy" 
                style={{ position: 'absolute', top: 0, right: 0 }}
            />
            <div className="container col-xxl-8 px-1 py-1 hero-content" style={{ zIndex: 1 }}>
                <div className="row flex-lg-row align-items-center g-5 ">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <h1 className="display-4 fw-bold lh-1 mb-4 ms-0 mt-5">
                            Platform Pendanaan Pendidikan Desentralisasi
                        </h1>
                        <p className="lead">
                            Ayo bantu anak-anak yang kurang mampu untuk memiliki keahlian
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-dark btn-lg px-4 me-md-2">
                                Lihat detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;