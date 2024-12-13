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
      question: 'Bagaimana cara donasi di website ini?',
      answer:
        'Untuk donasi di website ini, kunjungi halaman proyek yang ingin Anda dukung, lalu ikuti instruksi untuk menyumbangkan dana. Anda dapat melacak kemajuan dan dampak donasi melalui dashboard donatur. Pastikan untuk mengunduh laporan transparansi sebagai bukti kontribusi Anda.',
    },
    {
      question: 'Mengapa menggunakan Website ini?',
      answer:
        'Menggunakan website ini memberikan Anda kesempatan untuk berkontribusi langsung pada peningkatan kualitas pendidikan di Indonesia, terutama di daerah terpencil yang membutuhkan. Platform ini dirancang untuk transparansi penuh, memungkinkan Anda melacak penggunaan dana yang didonasikan. Dengan teknologi terkini, seperti blockchain, setiap transaksi dijamin keamanannya. Selain itu, Anda dapat melihat dampak nyata dari donasi Anda melalui laporan yang terperinci dan visualisasi data yang menarik. Platform ini juga menghubungkan Anda dengan berbagai proyek inovatif, membuka peluang untuk terlibat dalam komunitas yang peduli akan masa depan pendidikan. Dengan demikian, Anda tidak hanya berdonasi, tetapi juga berpartisipasi dalam perubahan sosial yang positif dan berkelanjutan.',
    },
    {
      question: 'Siapakah yang dapat menggunakan Website ini?',
      answer:
        'Website ini dapat digunakan oleh berbagai pihak yang memiliki kepedulian terhadap peningkatan kualitas pendidikan di Indonesia. Pertama, para donatur individu atau organisasi yang ingin menyumbangkan dana mereka untuk mendukung proyek-proyek pendidikan inovatif. Kedua, para pengelola proyek pendidikan yang mencari sumber pendanaan untuk mewujudkan ide-ide mereka dalam meningkatkan akses dan kualitas pendidikan, terutama di daerah-daerah terpencil. Selain itu, platform ini juga terbuka bagi para pemangku kepentingan di sektor pendidikan, seperti sekolah, lembaga non-profit, dan komunitas yang ingin berkolaborasi dalam menciptakan ekosistem pendidikan yang berkelanjutan. Dengan desain antarmuka yang user-friendly dan fitur-fitur transparansi yang ditawarkan, semua pengguna dapat dengan mudah terlibat dan berkontribusi sesuai peran masing-masing.',
    },
  ];

  return (
    <div className="container mt-5">
      {/* FAQ Title with bold and blue color */}
      <h2 className="text-center mb-4" style={{ fontWeight: 'bold', color: '#0066cc' }}>
        FAQ
      </h2>

      {faqData.map((faq, index) => (
        <Card key={index} className="mb-3 shadow-sm">
          <Card.Header>
            <h5 className="mb-0">{faq.question}</h5>
            {/* Toggle Button */}
            <Button
              variant="link"
              onClick={() => handleToggle(index)}
              aria-expanded={open[index]}
              className="float-end text-decoration-none"
              style={{ padding: '0.375rem', fontSize: '1.2rem' }} // Make button padding and font size more consistent
            >
              {open[index] ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
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
