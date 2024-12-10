import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

const FAQ = () => {
  const [open, setOpen] = useState({}); // State untuk melacak FAQ yang dibuka

  const handleToggle = (index) => {
    setOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle status buka/tutup
    }));
  };

  const faqData = [
    {
      question: 'Apa itu React?',
      answer:
        'React adalah library JavaScript untuk membangun antarmuka pengguna (UI), khususnya aplikasi web single-page yang efisien dan dapat dipelihara.',
    },
    {
      question: 'Bagaimana cara kerja Bootstrap?',
      answer:
        'Bootstrap adalah framework CSS open-source yang membantu Anda membangun desain responsif dengan cepat menggunakan grid system dan komponen UI yang siap pakai.',
    },
    {
      question: 'Apa itu state di React?',
      answer:
        'State adalah objek yang menyimpan data atau informasi tentang komponen dan dapat berubah seiring waktu, biasanya melalui interaksi pengguna.',
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">FAQ</h2>
      {faqData.map((faq, index) => (
        <Card key={index} className="mb-3 shadow-sm">
          <Card.Header>
            <h5 className="mb-0">{faq.question}</h5>
            <Button
              variant="link"
              onClick={() => handleToggle(index)}
              aria-expanded={open[index]}
              className="float-end text-decoration-none"
            >
              {open[index] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </Button>
          </Card.Header>
          <Card.Body>
            <Collapse in={open[index]}>
              <div>{faq.answer}</div>
            </Collapse>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default FAQ;
