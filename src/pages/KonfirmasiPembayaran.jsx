//src/pages/KonfirmasiPembayaran.jsx

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BackButton from '../components/Pembayaran/Button/BackButton';
import "../styles/KonfirmasiPembayaran.css";

function KonfirmasiPembayaran() {
    const location = useLocation(); 
    const { bank, amount, virtualAccount } = location.state || {}; 

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

    const handleCopy = () => {
        // Menyalin teks virtualAccount ke clipboard
        navigator.clipboard.writeText(virtualAccount)
            .then(() => {
                alert('Virtual account copied to clipboard!');
            })
            .catch((error) => {
                alert('Failed to copy virtual account. Please try again.');
            });
    };

    return (
        <>
        <div className="konfirmasi-pembayaran-page">
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

                    {/* Section Bank pilihan*/}
                    <div className="d-flex align-items-center mb-3">
                        <img 
                            src={bank.logo}
                            alt={bank.name}
                            className="me-3 img-fluid" 
                        />
                        <span>Bank {bank.name}</span>
                    </div>

                    {/* Section Total Pembayaran */}
                    <div className="d-flex flex-column mb-1"> 
                        <p className="m-0">Total Pembayaran</p>
                        <p className="m-0 fs-5">Rp {amount.toLocaleString()}</p>
                    </div>

                    {/* Section Virtual Account */}
                    <div className="d-flex flex-column mb-5">
                        <p className="m-0">Virtual Account</p>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="me-0 fs-5">{virtualAccount}</span>
                            <button className="btn btn-dark btn-sm btn-save" onClick={handleCopy}>Salin</button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-custom" onClick={() => window.history.back()}>Kembali</button>
                    </div>            
                </div>
            </div>
        </div>
        </>
    );
}

export default KonfirmasiPembayaran;
