import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './herohome.css';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className="hero-container" style={{ position: 'relative', maxWidth: '100vw' }}>
            <img 
                src={require('../../../assets/hands.png')} 
                className="hero-image" 
                alt="Hands holding a heart" 
                loading="lazy" 
                style={{ position: 'absolute', top: 0, right: 0 }}
            />
            <div className="container col-xxl-8 px-1 py-1 hero-content" style={{ zIndex: 1 }}>
                <div className="row flex-lg-row align-items-center g-5 ">
                    <div className="col-10 col-sm-8 col-lg-6 text-start text-lg-start text-white ">
                        <h1 className="display-5 fw-bold lh-1 mb-3 ms-0 mt-5">
                            Platform Pendanaan Pendidikan Desentralisasi
                        </h1>
                        <p className="lead">
                            "Platform terpercaya untuk donasi mudah dan transparan."
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <Link to="/login" className="btn btn-dark btn-lg px-4 me-md-2">Mari Bangun Masa Depan</Link>
                            <Link to="/regist" className='btn btn-outline-light btn-lg px-4'>Daftar Sekarang!</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;