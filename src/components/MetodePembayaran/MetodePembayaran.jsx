/* src/components/MetodePembayaran/MetodePembayaran.jsx */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MetodePembayaran.css'; 


function MetodePembayaran() {
    const navigate = useNavigate();
    const [nominal, setNominal] = useState('');
    const [selectedNominal, setSelectedNominal] = useState(null);
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        isAnonymous: false,
    });
    
    const donationOptions = [10000, 50000,  500000, 20000,100000, 1000000];

    const paymentMethods = [
        { name: 'BNI', logo: require('../../assets/bni-logo.png') },
        { name: 'BRI', logo: require('../../assets/bri-logo.png') },
        { name: 'Mandiri', logo: require('../../assets/mandiri-logo.png') },
        { name: 'BCA', logo: require('../../assets/bca-logo.png') },
        { name: 'OVO', logo: require('../../assets/ovo-logo.png') },
        { name: 'DANA', logo: require('../../assets/dana-logo.png') },
        { name: 'Bank Mega', logo: require('../../assets/bankmega-logo.png') },
        { name: 'BSI', logo: require('../../assets/bsi-logo.png') },
    ];

    const handleNominalClick = (amount) => {
        setNominal(amount);
        setSelectedNominal(amount);
    };
    
    const handlePaymentMethodClick = (method) => {
        setSelectedMethod(method);
    };
    
    const handleInputChange = ({ target: { name, value, type, checked } }) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nominal || !selectedMethod || !formData.name || !formData.email || !formData.phone) {
            alert('Semua kolom wajib di isi!');
            return;
        }

        // Data yang akan dikirim ke halaman KonfirmasiPembayaran
        const bank = paymentMethods.find((method) => method.name === selectedMethod); // Menemukan objek bank dari metode yang dipilih
        const virtualAccount = '87263748567'; 

        // Navigasi ke halaman KonfirmasiPembayaran dengan data
        navigate('/konfirmasi-pembayaran', {
            state: {
                bank,
                amount: nominal,
                virtualAccount,
            }
        });
    };

    return(
        <>
            {/* Section Button Back */}
            <button 
                className="btn btn-link btn-back"
                onClick={() => window.history.back()}>
                <i className="bi bi-chevron-left"></i> back
            </button>

            {/* Section Input Nominal Donasi */}
            <div className="container py-5">
                <h2 className="mb-4 text-center fw-bold fst-italic">
                    Masukan nominal donasi
                </h2>
                <div className="d-flex justify-content-center">
                <input
                    type="number"
                    placeholder="Wajib di isi"
                    value={nominal}
                    onChange={(e) => setNominal(e.target.value)}
                    className="form-control mb-5 donation-input"
                />
            </div>

            {/* Section Pilih Donasi */}
            <h4 className="mb-4 text-center fw-bold fst-italic">
                Atau pilih donasi
            </h4>
            <div className="d-flex flex-column gap-3 mb-5">
                {/* First Row of Donation Options */}
                <div className="d-flex justify-content-center gap-3">
                    {donationOptions.slice(0, 3).map((amount) => (
                        <button
                            key={amount}
                            onClick={() => handleNominalClick(amount)}
                            className={`btn donation-btn ${selectedNominal === amount ? 'donation-btn-active' : ''}`}>
                            Rp. {amount.toLocaleString()}
                        </button>
                    ))}
                </div>
                {/* Second Row of Donation Options */}
                <div className="d-flex justify-content-center gap-3">
                    {donationOptions.slice(3).map((amount) => (
                        <button
                            key={amount}
                            onClick={() => handleNominalClick(amount)}
                            className={`btn donation-btn ${selectedNominal === amount ? 'donation-btn-active' : ''}`}>
                            Rp. {amount.toLocaleString()}
                        </button>
                    ))}
                </div>
            </div>

            {/* Section Metode Pembayaran */}
            <div className="container py-3">
                <h4 className="mb-4 text-center fw-bold fst-italic">
                    Metode Pembayaran
                </h4>
                <div className="d-flex justify-content-center">
                    <div className="row row-cols-2 row-cols-md-4 gx-3 gy-3 mb-5 payment-methods-container">
                        {paymentMethods.map((method) => (
                            <div key={method.name} className="col">
                                <button
                                    onClick={() => handlePaymentMethodClick(method.name)}
                                    className={`btn w-100 payment-method-btn ${selectedMethod === method.name ? 'border border-primary' : ''}`}>
                                <img src={method.logo} alt={method.name} className="img-fluid"/>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section Form */}
            <div className="container py-3">
                <form onSubmit={handleSubmit} className="form-container px-3 px-md-5">
                    {/* Input Nama */}
                    <div className="mb-2">
                        <label className="form-label fw-bold fst-italic">Nama</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Wajib di isi"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    {/* Input Email */}
                    <div className="mb-2">
                        <label className="form-label fw-bold fst-italic">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Wajib di isi"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    {/* Input HP */}
                    <div className="mb-2">
                        <label className="form-label fw-bold fst-italic">No HP</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Wajib di isi"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    {/* Input Doa */}
                    <div className="mb-2">
                        <label className="form-label fw-bold fst-italic">Dukungan atau Doamu (Optional)</label>
                        <textarea
                            name="message"
                            placeholder=""
                            value={formData.message}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    <div className="row align-items-center mb-2 form-bottom-section">
                        {/* Checkbox */}
                        <div className="col-auto">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="isAnonymous"
                                    checked={formData.isAnonymous}
                                    onChange={handleInputChange}
                                    className="form-check-input circle-checkbox"
                                    id="anonymousCheck"
                                />
                                <label className="form-check-label" htmlFor="anonymousCheck">
                                    Tampilkan sebagai anonim
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="col text-end">
                            <button type="submit" className="btn btn-dark">
                                Lanjutkan
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default MetodePembayaran;