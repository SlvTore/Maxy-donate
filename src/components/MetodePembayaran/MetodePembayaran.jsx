import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './MetodePembayaran.css'; // Import the custom CSS for this component

function MetodePembayaran() {

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
    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Nominal:', nominal || selectedNominal);
        console.log('Payment Method:', selectedMethod);
        console.log('Form Data:', formData);
    };    

    return(
        <>
            {/* Section Button Back */}
            <button 
                className="btn btn-link btn-back"
                onClick={() => window.history.back()}>
                <i className="bi bi-chevron-left"></i> back
            </button>

            {/* Section input nominal donasi */}
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

            {/* Section pilih donasi */}
            <h4 className="mb-4 text-center fw-bold fst-italic">
                Atau pilih donasi</h4>
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
            <h4 className="mb-4 text-center fw-bold fst-italic">
                Metode Pembayaran</h4>
            <div className="d-flex justify-content-center">
                <div className="row row-cols-2 row-cols-md-4 gx-3 gy-3 mb-5" style={{ maxWidth: '800px', width: '100%' }}>
                    {paymentMethods.map((method) => (
                        <div key={method.name} className="col">
                            <button
                                onClick={() => handlePaymentMethodClick(method.name)}
                                className={`btn w-100 ${selectedMethod === method.name ? 'border border-primary' : ''}`}>
                            <img
                                src={method.logo}
                                alt={method.name}
                                className="img-fluid"
                                style={{ maxHeight: '60px', objectFit: 'contain' }}
                            />
                            </button>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container py-5">
                <form onSubmit={handleSubmit} className="w-100 px-3 px-md-5">
                    {/* Input Nama */}
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
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
                    <div className="mb-3">
                        <label className="form-label fw-bold fst-italic">Dukungan atau Doamu (Optional)</label>
                        <textarea
                            name="message"
                            placeholder=""
                            value={formData.message}
                            onChange={handleInputChange}
                            className="form-control"
                        />
                    </div>

                    <div className="row align-items-center mb-4">
                        {/* Checkbox */}
                        <div className="col-auto">
                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    name="isAnonymous"
                                    checked={formData.isAnonymous}
                                    onChange={handleInputChange}
                                    className="form-check-input"
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