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
    <div>
        <h1 className='text-center my-5'>Frequently Asked Questions</h1>
        <div className="container mt-0 mb-5 accordion m" id="accordionExample">
          <div className="accordion-item">
          <h2 className="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Website Apakah ini?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            Halaman kami merupakan website pendanaan pendidikan yang dipersilakan untuk membantu anak-anak yang kurang mampu untuk terus belajar.
         </div>
      </div>
   </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Mengapa harus menggunakan website ini?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Website  kami menawarkan berbagai macam pilihan pendanaan pendidikan yang dapat membantu anak-anak yang kurang mampu untuk terus belajar.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Apakah ada biaya untuk menggunakan website ini?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Tidak ada biaya untuk menggunakan website kami. Kami merupakan perusahaan non-profit yang membantu anak-anak yang kurang mampu untuk terus belajar.
      </div>
    </div>
  </div>
</div>
     </div>
  );
};

export default FAQ;
