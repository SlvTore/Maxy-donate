import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './herohome.css';

function Hero() {
    return (
        <>
            <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                <img 
                    src={require('../../../assets/Idea.png')}
                    className="d-block mx-lg-auto img-fluid" 
                    alt="Bootstrap Themes" 
                    width="400" 
                    height="400" 
                    loading="lazy" 
                />
                </div>
                <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
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
        </>
    )
    
}

export default Hero;