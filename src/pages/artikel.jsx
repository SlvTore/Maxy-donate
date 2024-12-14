import React from 'react';
import { Carousel, Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/artikel.css';

const NewsPortal = () => {
  return (
    <Container className="mt-5">
      {/* Headline Section */}
      <Row className="mb-4">
        <Col>
          <div className="headline-section">
            <h1 className="mt-3">Kabar Terkini: Program Amal Maxy yang Membawa Perubahan</h1>
            <p>Artikel yang menyajikan kondisi terkini pendidikan di Indonesia, serta kontribusi para pihak yang turut mengembangkan serta memajukan pendidikan yang konstruktif di Indonesia.</p>
          </div>
        </Col>
      </Row>

      <Row>
        {/* Main Content */}
        <Col md={8}>
          {/* Sliding News */}
          <Carousel className="mb-4">
            <Carousel.Item>
              <img
                src="https://kodam17cenderawasih-tniad.mil.id/wp-content/uploads/2023/02/IMG_20230210_185311_1.jpg"
                alt="News 1"
                className="d-block w-100 rounded"
              />
              <Carousel.Caption>
                <h3>Cerita Inspiratif: Bagaimana Donasi Anda Membawa Harapan Baru</h3>
                <p>Siswa dan siswi SMP Pelita Cahaya mendapatkan fasilitas belajar coding gratis.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://freevolunteering.net/wp-content/uploads/2018/12/352da15d0a6133e4cc3cae80a807d06800604806.jpg"
                alt="News 2"
                className="d-block w-100 rounded"
              />
              <Carousel.Caption>
                <h3>Kenali Tim di Balik Maxy Donate: Mengapa Kami Peduli</h3>
                <p>Tim di balik layar Maxy Donate yang turut menyalurkan dana donasi Anda kepada penerima.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://ciptomedia.com/wp-content/uploads/2022/01/donasi-8.jpeg"
                alt="News 3"
                className="d-block w-100 rounded"
              />
              <Carousel.Caption>
                <h3>Laporan Transparansi: Ke Mana Donasi Anda Disalurkan?</h3>
                <p>Rekapitulasi anggaran dana yang diperoleh serta dokumentasi penyerahan donasi ke masing-masing program.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

          {/* Small News Cards */}
          <Row>
            {[1, 2, 3, 4].map((item) => (
              <Col md={6} className="mb-4" key={item}>
                <Card>
                  <Card.Img variant="top" src="https://www.triplec.or.id/wp-content/uploads/2019/10/IMG-20190909-WA0015.jpg" />
                  <Card.Body>
                    <Card.Title>Membangun Generasi Emas: Program Maxy yang Mendorong Pendidikan Digital {item}</Card.Title>
                    <Card.Text>
                      Program Maxy Donate yang menghadirkan 500 unit laptop serta 1000 unit PC ke daerah 3T di Indonesia.
                    </Card.Text>
                    <Card.Link href="#">Baca Selengkapnya</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Sidebar Links */}
        <Col md={4}>
          <h3>Berita Terkait</h3>
          <ListGroup>
            {[1, 2, 3, 4, 5].map((item) => (
              <ListGroup.Item key={item}>
                <a href="#" className="text-decoration-none">
                Dari Hati ke Hati: Donasi yang Membawa Perubahan Nyata {item}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsPortal;
