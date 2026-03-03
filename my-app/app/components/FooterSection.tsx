import { Container, Row, Col } from 'react-bootstrap';

const FooterSection = () => (
  <Container fluid className="info-section py-4">
    <Container>
      <Row className="text-center text-md-start">

        <Col md={4}>
          <h5>Lunch</h5>
          <p>Monday - Friday: 11:00am - 2:30pm</p>
          <p>Saturday - Sunday: Not open</p>
        </Col>

        <Col md={4}>
          <h5>Bar</h5>
          <p>Monday - Friday: From 11:00am to closing</p>
          <p>Saturday - Sunday: Not open</p>
        </Col>

        <Col md={4}>
          <h5>Dinner</h5>
          <p>Monday - Friday: 5:00pm - 9:00pm</p>
          <p>Saturday - Sunday: Not open</p>
        </Col>

      </Row>
    </Container>
  </Container>
);

export default FooterSection;