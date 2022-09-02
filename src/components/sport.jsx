import { Label, Input, FormGroup, Col, Row } from 'reactstrap'

const Sport = () => {

  return (
      <Row>
        <Col md={{ size: 2, offset: 1 }}>
          <FormGroup check>
            <Input type="checkbox" id="baskets" />
            <Label for="baskets">Baskets</Label>
          </FormGroup>
        </Col>
        
        <Col md={2}>
          <FormGroup check>
            <Input type="checkbox" id="handball" />
            <Label for="handball">Handball</Label>
          </FormGroup>
        </Col>

        <Col md={2}>
          <FormGroup check>
            <Input type="checkbox" id="badminton" />
            <Label for="badminton">Badminton</Label>
          </FormGroup>
        </Col>

        <Col md={2}>
          <FormGroup check>
            <Input type="checkbox" id="climbing" />
            <Label for="climbing">Escalade</Label>
          </FormGroup>
        </Col>

        <Col md={2}>
          <FormGroup check>
            <Input type="checkbox" id="volley" />
            <Label for="volley">Volley</Label>
          </FormGroup>
        </Col>
      </Row>
  )
}

export default Sport

