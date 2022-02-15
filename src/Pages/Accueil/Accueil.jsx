import { Container, Row, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="App">
      <main>
        <Container>
          <Row>
            <div className="p-5 mb-4 bg-light rounded-3">
              <Container fluid className="py-5">
                <h1 className="display-5 fw-bold">BTC Pendu</h1>
                &nbsp;
              </Container>
            </div>
            <Col>
              <Button className=" mb-2" size="lg" as={Link} to="/pendu">
                Jouer
              </Button>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}
