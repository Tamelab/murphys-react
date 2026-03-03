import { Container } from 'react-bootstrap';

const MiddleSection = () => (
  <Container
    fluid
    className="hero-section d-flex align-items-center justify-content-center text-center"
    style={{ height: '500px' }}  // 👈 This fixes the height issue
  >
    <div className="hero-content">
      <h1>Now accepting reservations for St. Patrick’s Day</h1>
      <p>Please call 808-531-0422 for reservations</p>
      <p>St Patrick’s Day To-Go Orders can be ordered on our website menu.</p>
    </div>
  </Container>
);

export default MiddleSection;