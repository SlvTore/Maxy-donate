import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './sections1.css';
import { useEffect } from 'react';
import { Parallax, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import logo from '../../../assets/logomdonate.png'

const Section1 = () => {
        const center = [-7.2753, 112.7193];
        const zoom = 14;
        const markerPosition = [-7.2753, 112.7193];

    return (
             <div>
             
            <div className='container-fluid my-5'>
            
                <div className='row'>
                    <div className='col-md-6'>
                        <h2><em>Informasi</em></h2>
                        <p className='mt-4'>Pendidikan adalah salah satu hal yang terpenting dalam kehidupan kita. Dengan pendidikan ini lah yang dapat membuat kita memiliki kehidupan yang lebih layak dan sejahtera. Namun tingkat pendidikan di indonesia saat ini masih rendah.</p>
                        <p>Jakarta - Ketua Akademi Ilmu Pengetahuan Indonesia (AIPI) Prof Daniel Murdiyarso ungkap perguruan tinggi di Indonesia masih menghadapi banyak tantangan. Untuk mengidentifikasinya, Daniel menggunakan pendekatan PESTLE.</p>
                        <p>"Tantangannya (perguruan tinggi) banyak, tapi boleh kita gunakan analisa yang namanya PESTLE yaitu political, economic, social, technological, legal and environment (lingkungan)," katanya dalam Rapat Dengar Pendapat Umum Komisi X DPR RI terkait Pendidikan Tinggi, Riset, dan Teknologi, Selasa (5/11/2024).</p>
                        <p>Maka dari hal tersebut kami terinspirasi untuk membuat platform pendanaan pendidikan ini yang bernama MAXY DONATE.</p>
                    </div>
                    <div className='col-md-6 '> 
                    <figure className="figure mt-3 p-5">
                    <img src={require("../../../assets/studentclassroom.jpg")}  class="figure-img img-fluid rounded" alt="..."  width={600} height={600}/>
                    <figcaption className="figure-caption">Baca artikel detikedu, "Tantangan Pendidikan Tinggi RI Menurut AIPI: Biaya Kuliah Mahal-Kesenjangan Akses" selengkapnya; <a href='https://www.detik.com/edu/perguruan-tinggi/d-7623616/tantangan-pendidikan-tinggi-ri-menurut-aipi-biaya-kuliah-mahal-kesenjangan-akses'>https://www.detik.com/edu/perguruan-tinggi/d-7623616/tantangan-pendidikan-tinggi-ri-menurut-aipi-biaya-kuliah-mahal-kesenjangan-akses</a></figcaption>
                    </figure>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2>Tentang Maxy Donate</h2>
                        <p>Maxy Donate adalah platform inovatif yang didedikasikan untuk membantu individu dan komunitas dalam mencapai impian pendidikan mereka. Kami memahami bahwa pendidikan adalah kunci masa depan, namun banyak yang menghadapi hambatan finansial untuk mencapainya. Melalui Maxy Donate, kami berkomitmen untuk menjembatani kesenjangan ini dan memberikan peluang bagi semua orang untuk mendapatkan pendidikan yang layak.</p>
                        <div className='my-5' style={{ height: '300px', overflow: 'auto' }}>
                        <MapContainer center={center} zoom={zoom} style={{ height: '100%', width: '100%' }}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            />
                            <Marker position={markerPosition}>
                            <Popup>
                                <div>
                                <h2>Lokasi</h2>
                                <p>Informasi lokasi</p>
                                </div>
                            </Popup>
                            </Marker>
                        </MapContainer>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CiFoHm7HD94?si=a9KUWoQbg7nldUD1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <i className="bi bi-quote" style={{ fontSize: '3rem', color: '#FFC962', marginBottom: '12rem' }}></i>
                    <figure className="text-end">
                        <blockquote className="blockquote">
                            <p>bukan berapa banyak yang kita berikan, tetapi seberapa besar cinta yang kita berikan.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                        <cite title="Source Title">Mother Teresa</cite>
                        </figcaption>
                        <Link to='/' className="btn btn-outline-dark mt-3">Buat Perubahan Sekarang</Link>
                    </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1;