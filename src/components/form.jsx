import { useState } from 'react'
import { useForm } from 'react-hook-form'
import save from '../airtable'
import { 
  Form, Row, Col, Container, FormGroup, Label, Button
} from 'reactstrap'

// const apiKey = 'keyNyrwsjMbMZmIkt'
// const DB = airtable({ apiKey }).base('app3N9Rcex36r1bbc')

const FForm = () => {
  const { register, handleSubmit, getValues, setValue, reset } = useForm()
  const [ id, setId ] = useState(false)
  const onSubmit = () => {
    partialSave()
    reset()
    setId(false)
  }
  const onAdd = () => {
    partialSave()
    setId(false)
    setValue('first_name', '')
    setValue('birthday', '')
  }

  const partialSave = () => {
    const data = getValues()
    save(id, data).then(key => { if (!id) { setId(key) }})

    console.log(data, id)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
      <Row><Col>
      <figure className="text-center"><p>Formulaire d'inscription ou prise de contact pour la saison 2022/2023 à l'association l'entente Morlanaise</p></figure></Col></Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="last_name">Nom du membre</Label>
              <input onFocus={partialSave} className="form-control" {...register('last_name')} type="text" id="last_name" name="last_name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="first_name">Prénom du membre</Label>
              <input onFocus={partialSave} className="form-control" {...register('first_name')} type="text" id="first_name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="birthday">Date de naissances du membre</Label>
              <input onFocus={partialSave} type="date" className="form-control" {...register('birthday')} id="birthday" name="birthday" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <input onFocus={partialSave} type="email" className="form-control" {...register('email')} name="email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="phone">Téléphone</Label>
              <input onFocus={partialSave} type="tel" name="phone" className="form-control" {...register('phone')} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          
          <Col xs={6} md={2}>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="handball" className="form-check-input" {...register('handball')} />
              <Label for="handball">Handball</Label>
            </FormGroup>
          </Col>
    
          <Col xs={6} md={{ size: 2, offset: 1 }}>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="baskets" className="form-check-input" {...register('baskets')} />
              <Label for="baskets">Baskets</Label>
            </FormGroup>
          </Col>

          <Col xs={6} md={2}>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="badminton" className="form-check-input" {...register('badminton')} />
              <Label for="badminton">Badminton</Label>
            </FormGroup>
          </Col>

          <Col xs={6} md={2}>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="climbing" className="form-check-input" {...register('climbing')} />
              <Label for="climbing">Escalade</Label>
            </FormGroup>
          </Col>

          <Col xs={6} md={2}>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="volley" className="form-check-input" {...register('volley')} />
              <Label for="volley">Volley</Label>
            </FormGroup>
          </Col>
        </Row>
        <Row><br /></Row>
        <Row>
          <Col>
            <FormGroup check>
              <input onFocus={partialSave} type="checkbox" id="is_informative" className="form-check-input" {...register('is_informative')} />
              <Label for="is_informative">Je souhaite uniquement des informations</Label>
            </FormGroup>
            </Col>
        </Row>
        <Row><br /></Row>
        <Row>
          <Col xs={{ size: 6 }} md={{ size: 2, offset: 8 }}>
            <FormGroup>
              <Button onClick={onAdd} color="primary">Ajouter membre</Button>
            </FormGroup>
          </Col>
          <Col xs={{ size: 3, offset: 1 }} md={2}>
            <FormGroup>
              <Button color="success">Enregistrer</Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default FForm
