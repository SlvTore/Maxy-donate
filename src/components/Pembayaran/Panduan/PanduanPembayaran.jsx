/* src/components/Pembayaran/Panduan/PanduanPembayaran.jsx */

import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './PanduanPembayaran.css'; 

const PanduanPembayaran = () => {
  const [open, setOpen] = useState({}); 

  const handleToggle = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };

  const paymentGuidelines = [ 
    {
      question: 'Pembayaran melalui Mobile Banking?',
      answer:
        'Buka aplikasi Mobile Banking Anda, pilih menu transfer, masukkan nomor rekening virtual yang telah disalin, dan ikuti petunjuk untuk menyelesaikan pembayaran.',
    },
    {
      question: 'Pembayaran melalui ATM?',
      answer:
        'Kunjungi ATM terdekat, masukkan kartu ATM Anda, pilih menu transfer, masukkan nomor rekening virtual yang telah disalin, dan ikuti petunjuk hingga pembayaran selesai.',
    },
    {
      question: 'Pembayaran melalui E-Wallet (opsional)?',
      answer:
        'Pilih opsi pembayaran melalui E-Wallet di halaman pembayaran, masukkan nomor yang sesuai dengan akun E-Wallet Anda, dan selesaikan transaksi melalui aplikasi E-Wallet.',
    },
  ];

  return (
    <div className="container payment-container">
      <h4 className="text-center fw-bold custom-margin">PANDUAN PEMBAYARAN</h4>
      {paymentGuidelines.map((guide, index) => (
        <Card key={index} className="mb-3 shadow-sm">
          <Card.Header onClick={() => handleToggle(index)} className="d-flex card-header py-1 px-3">
            <h5 className="mb-0 fw-bold">{guide.question}</h5>
            <Button
              variant="link"
              aria-expanded={open[index]}
              className="text-decoration-none chevron-icon"
            >
              {open[index] ? (
                <ChevronUp size={20} style={{ strokeWidth: 2 }} />
              ) : (
                <ChevronDown size={20} style={{ strokeWidth: 2 }} />
              )}
            </Button>
          </Card.Header>
          <Collapse in={open[index]}>
            <Card.Body className="card-body">
              <div>{guide.answer}</div>
            </Card.Body>
          </Collapse>
        </Card>
      ))}
    </div>
  );
};

export default PanduanPembayaran;
