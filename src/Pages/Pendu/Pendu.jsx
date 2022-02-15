import { Container, Row, Button, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function HomePage() {
  let mots = localStorage.getItem(`mots`)
  mots = JSON.parse(mots)

  const [mot] = useState(mots)
  const [alphabet] = useState('abcdefghijklmnopqrstuvwxyz')

  let displayMot = alphabet.split('').map((ltr, indice) => {
    return (
      <Button className="m-1" key={indice} value={ltr}>
        {ltr}
      </Button>
    )
  })

  let displayMots = mot.map((motsInfos, indice) => {
    let leMot = motsInfos.titre
    return <h1 key={indice}>{leMot.split('')}</h1>
  })

  console.log(mot)

  return (
    <div className="App">
      <main>
        <Container>
          <Row>
            <div className="p-5 mb-4 bg-light rounded-3">
              <Container fluid className="py-5">
                {displayMots}
              </Container>
            </div>
            <Col>{displayMot}</Col>
          </Row>
          <Button className="mt-3" variant="outline-secondary">
            Recommencer
          </Button>
        </Container>
      </main>
    </div>
  )
}
