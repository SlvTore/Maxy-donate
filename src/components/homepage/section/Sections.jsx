import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './section.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Container, Row, Col } from 'react-bootstrap';

const Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    afterChange: (currentSlide) => {
      setActiveIndex(currentSlide);
    },
  };

  const testimonials = [
    { id: 1, name: 'John Doe', text: 'Terima kasih atas donasinya, kini saya bisa belajar dengan tenang tanpa khawatir biaya pendidikan.', rating: 5 },
    { id: 2, name: 'Jane Doe', text: 'Bantuan ini sangat berarti bagi saya, terima kasih telah membantu mewujudkan mimpi saya untuk terus belajar.', rating: 4 },
    { id: 3, name: 'Bob Smith', text: 'Dukungan ini memberikan saya semangat baru untuk mengejar cita-cita saya. Terima kasih dari hati terdalam.', rating: 5 },
    { id: 4, name: 'Alice Joe', text: 'Saya sangat bersyukur atas kebaikan Anda, donasi ini telah meringankan beban pendidikan saya.', rating: 4 },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`bi ${index < rating ? 'bi-star-fill' : 'bi-star'}`}
        style={{ color: '#FFD700', marginRight: '3px' }}
      ></i>
    ));
  };

  return (
    <Container  style={{ backgroundColor: '#2949A8', padding: '60px', maxWidth: '100%' }}>
      <h1 className='text-center text-white mt-5'>Apa Komentar Anak yang Terbantu?</h1>
      <Row>
        <Col md={12}>
          <Slider {...settings}
          >
            
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id}>
                <Card
                  style={{
                    width: '18rem',
                    margin: '15px',
                    transition: 'transform 0.3s ease-in-out',
                    transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                    borderRadius: activeIndex === index ? '0px' : '0px',
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}
                  className='p-5 my-3'
                >
                  <Card.Body>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div
                        style={{
                          width: '50px',
                          height: '42px',
                          borderRadius: '50%',
                          backgroundColor: '#ccc',
                          marginRight: '10px',
                        }}
                      />
                      <h3 className='card-title'>{testimonial.name}</h3>
                    </div>
                    <Card.Text>{testimonial.text}</Card.Text>
                    <div className="review-stars">{renderStars(testimonial.rating)}</div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default Section;
