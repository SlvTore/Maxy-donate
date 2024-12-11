import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './section.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card, Container, Row, Col, Button } from 'react-bootstrap';



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
    { id: 1, name: 'John Doe', text: 'Terima kasih atas donasinya, kini saya bisa belajar dengan tenang tanpa khawatir biaya pendidikan.' },
    { id: 3, name: 'Jane Doe', text: 'Bantuan ini sangat berarti bagi saya, terima kasih telah membantu mewujudkan mimpi saya untuk terus belajar.' },
    { id: 4, name: 'Bob Smith', text: 'Dukungan ini memberikan saya semangat baru untuk mengejar cita-cita saya. Terima kasih dari hati terdalam.' },
    { id: 5, name: 'Alice Johnson', text: 'Saya sangat bersyukur atas kebaikan Anda, donasi ini telah meringankan beban pendidikan saya' },
  ];

  return (
    <>
      <Container fluid style={{ backgroundColor: '#2949A8', padding: '20px', margin: '3em 0 5em 0' }}>
      <h1 className='text-center text-white mb-3'>Apa Komentar anak yang terbantu ?</h1>
      <Row>
        <Col md={12}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id}>
                <Card
                  style={{
                    width: '18rem',
                    margin: '10px',
                    transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
                    opacity: activeIndex === index ? 1 : 0.5,
                  }}

                  className='p-3 my-3'
                >
                  <Card.Body>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: '#ccc',
                          marginRight: '10px',
                      }}
                    />
                    <h3 className='card-title'>{testimonial.name}</h3> 
                  </div>   
                    <Card.Text>{testimonial.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </Container>
    </>
  );
}

 



export default Section;