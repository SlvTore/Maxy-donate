import React from 'react';
import './footer.css';

function Footer() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Footer 3</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <link rel="stylesheet" href="src/style.css" />
  <footer>
    <article>
      <h2>Got our latest news.</h2>
      <button type="button" className='d-flex justify-content-center align-items-center'>
        <p style={{ marginTop: '15px' }}>Sign up free</p>
        <span className="material-symbols-outlined"> trending_flat </span>
      </button>
    </article>
    <section className="top">
      <ul>
        <li>
          <h3>Kontak</h3>
          <a href="https://www.instagram.com/username" target="_blank">Instagram</a>
          <a href="https://www.WhatsApp.com/username" target="_blank">WhatsApp</a>
          <a href="#" target="_blank">E-mail</a>
        </li>
        <li>
          <h3>Company</h3>
          <a>Home</a>
          <a>Tentang Kami</a>
          <a>Artikel</a>
        </li>


        <li>
          <h3>Alamat</h3>
          <a>JI Keceriaan No. 7, RT 1, RW 2, Desa Tertawa Bahagia, Kecamatan Ceria, Kota Senyum Sejahtera, Kabupaten
          Gembira, Provinsi Suka Hati, Indonesia.</a>
        </li>
      </ul>
    </section>
    <section className="bottom">© 2024 Maxy Donate</section>
  </footer>
</>


  );
}

export default Footer;
