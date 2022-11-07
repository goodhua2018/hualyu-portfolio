import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FooterMain() {
  return (
    <Container>
      <Row>
        <Col sm={1}>sm=8</Col>
        <Col sm={7}>sm=8</Col>
        <Col sm={3}>sm=8</Col>
        <Col sm={1}>sm=4</Col>
      </Row>
    </Container>
  );
}
