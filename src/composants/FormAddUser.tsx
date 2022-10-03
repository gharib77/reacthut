import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Formik } from 'formik'
import { Container, FormGroup, FormControl, Col, Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'

type Myvalues = {
  nom: string;
  prenom: string;
  age:number;
  dateNais: Date | null
}
const validationSchema = Yup.object({
  nom: Yup.string().required("nom obligatoire"),
  prenom: Yup.string().required("prenom obligatoire"),
  age: Yup.number().min(18,'hjkjkjk'),
  //dateNais: Yup.date().required('date obligatoire')
})
const FormAddUser = () => {
  return (
    <Container>
      <Formik<Myvalues>
        initialValues={{ nom: "", prenom: "",age:0,dateNais:null }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {(formik) => {
          const onChangeDate = (date:Date|null)=>{
              formik.setFieldValue('dateNais',date)
              console.log(date)
          }
          return (
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <FormControl 
                  type="text"
                  name="nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <FormControl 
                  type="text"
                  name="prenom"
                  value={formik.values.prenom}
                  onChange={formik.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <FormControl 
                  type="text"
                  name="age"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.age}
                />
                <Form.Control.Feedback type="invalid">
                {formik.errors.age}
              </Form.Control.Feedback>
              </FormGroup>
              <FormGroup>
              <DatePicker 
                      name="dateNais"
                      selected={formik.values.dateNais}
                      dateFormat="dd/MM/yyyy"
                      className='form-control'
                      onChange={onChangeDate}
                />
              </FormGroup>
              <FormGroup>
                <Button variant="info" size="sm" type="submit">Enregistrer</Button>
              </FormGroup>

            </Form>
          )
        }}
      </Formik>

    </Container>




  )
}

export default FormAddUser
