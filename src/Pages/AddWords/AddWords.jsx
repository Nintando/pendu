import { Container, Button, Row, Col, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react'

export default function ConfigGlobal() {
  const [mots, setMots] = useState([])

  // Affichage des mots
  let displayMot = mots.map((motInfos, indice) => {
    const id = motInfos.id
    return (
      <tr key={'mots-' + motInfos.id}>
        <td>{motInfos.titre}</td>
        <td>
          <Button
            variant="outline-danger"
            onClick={() => deleteCateItem(indice)}
          >
            Supprimer le mot
          </Button>
        </td>
      </tr>
    )
  })

  // Fonction qui permet l'ajout des mots
  function add() {
    let titre = window.prompt("Veuillez saisir l'intitulé de votre catégorie")
    if (titre !== null && titre.trim().length > 0) {
      let tmp = [...mots]
      let id = Date.now()
      let obj = { id, titre }
      tmp.push(obj)
      setMots(tmp)
    }
  }

  // Récupération des mots dans le localStorage
  useEffect(() => {
    let datas = localStorage.getItem(`mots`)
    setMots(JSON.parse(datas))
  }, [])

  // Envoye des mots dans le localStorage
  useEffect(() => {
    localStorage.setItem(`mots`, JSON.stringify(mots))
  }, [mots])

  // Fonction qui permet de supprimer des mots
  function deleteCateItem(i) {
    let tmp = [...mots]
    tmp.splice(i, 1)
    setMots(tmp)
  }

  return (
    <div className="App">
      <main>
        <Container>
          <Row className="mb-4">
            <Col>
              <Button className=" mb-2" onClick={add}>
                Ajouter un mot
              </Button>
            </Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Mots</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody>{displayMot}</tbody>
            </Table>
          </Row>
        </Container>
      </main>
    </div>
  )
}
