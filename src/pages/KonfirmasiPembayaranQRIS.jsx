// src/pages/KonfirmasiPembayaranQRIS.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BackButton from '../components/Pembayaran/Button/BackButton';
import "../styles/KonfirmasiPembayaranQRIS.css";

function KonfirmasiPembayaranQRIS() {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

    useEffect(() => {
        // Simpan tanggal deadline pembayaran di localStorage
        const paymentDeadline = new Date(); 
        paymentDeadline.setDate(paymentDeadline.getDate() + 1); 
        localStorage.setItem('paymentDeadline', paymentDeadline);

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const deadline = new Date(localStorage.getItem('paymentDeadline')).getTime();
            const remainingTime = Math.max(deadline - now, 0);
            setTimeLeft(remainingTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (milliseconds) => {
        const seconds = Math.floor(milliseconds / 1000);
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const deadlineDate = tomorrow.toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <>
        <div className="konfirmasi-pembayaran-qris-page">
            <BackButton />

            <div className="container py-5">
                <div className="container py-3">
                    <h1 className="text-center fw-bold fst-italic">Terima kasih</h1>
                    <h4 className="text-center fw-bold fst-italic">lanjut pembayaran</h4>
                </div>

                <div className="border p-4 rounded konfirmasi-box">
                    {/* Section Batas Pembayaran */}
                    <p className="m-0 fs-5">Batas Pembayaran</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-6">Maksimum {deadlineDate}</span>
                        <span className="text-danger">
                            <div className="time-box">
                                {formatTime(timeLeft)}
                            </div>
                        </span>
                    </div>

                    <hr className="my-3" /> 

                    {/* QRIS Code Section */}
                    <div className="d-flex justify-content-center">
                        <img 
                            src={require('../assets/qris-kode.png')} 
                            alt="QRIS Code" 
                            className="img-fluid" 
                            style={{ maxWidth: '300px', border: '1px solid black', borderRadius: '10px' }} 
                        />
                    </div>

                    <div className="d-flex justify-content-center mt-5">
                        <button className="btn btn-primary btn-custom" onClick={() => window.history.back()}>Kembali</button>
                    </div>            
                </div>
            </div>
        </div>
        </>
    );
}

export default KonfirmasiPembayaranQRIS;
