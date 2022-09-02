import { 
  Input, Row, Col, Label, FormGroup
} from 'reactstrap'

const Identity = () => {

  return (
    <>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="first_name">Prénom</Label>
            <Input type="text" id="first_name" name="first_name" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="last_name">nom</Label>
            <Input type="text" id="last_name" name="last_name" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <FormGroup>
            <Label for="birthday">Date de naissances</Label>
            <Input type="date" id="birthday" name="birthday" />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default Identity

