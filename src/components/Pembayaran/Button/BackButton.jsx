/* src/components/Pembayaran/Button/BackButton.jsx */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BackButton.css';

function BackButton() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <button className="btn btn-link btn-back" onClick={handleBack}>
            <i className="bi bi-chevron-left"></i> Back
        </button>
    );
}

export default BackButton;

