import React, { useContext } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Formik } from 'formik'
import { Container, FormGroup, FormControl, Col, Button, Form } from 'react-bootstrap'
import * as Yup from 'yup'
import { DataContext } from '../contexts/DataContext'

type Myvalues = {
  nom: string;
  prenom: string;
  age: number;
  dateNais1: Date | null
}
const validationSchema = Yup.object({
  nom: Yup.string().required("nom obligatoire"),
  prenom: Yup.string().required("prenom obligatoire"),
  age: Yup.number().min(18, 'hjkjkjk'),
  dateNais1: Yup.date().nullable().required('date obligatoire')
})
const FormAddUser = () => {
  const { dispatch } = useContext(DataContext)
  return (
    <Container>
      <Formik<Myvalues>
        initialValues={{ nom: "", prenom: "", age: 0, dateNais1: null }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          if (values.dateNais1 !== null) {
            const wdate = values.dateNais1.toLocaleDateString('fr-CA')
            const newObject={id:new Date().getTime(),nom:values.nom,prenom:values.prenom,age:values.age,test:values.dateNais1.toLocaleDateString('fr-CA')}
            console.log(values.dateNais1.toLocaleDateString('fr-CA'))
            dispatch({ type: 'ADD', payload: newObject })
          }

        }}
      >
        {(formik) => {
          const onChangeDate = (date: Date | null) => {
            formik.setFieldValue('dateNais1', date)
          }
          return (
            <Form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <FormControl
                  type="text"
                  name="nom"
                  value={formik.values.nom}
                  onChange={formik.handleChange}
                  isInvalid={!!formik.errors.nom}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.nom}
                </Form.Control.Feedback>
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
                  selected={formik.values.dateNais1}
                  dateFormat="dd/MM/yyyy"
                  className='form-control'
                  onChange={onChangeDate}
                  onBlur={formik.handleBlur}
                />
                <Form.Text className="text-danger">
                  {formik.touched.dateNais1 && formik.errors.dateNais1 ? (
                    <div className="text-danger">{formik.errors.dateNais1}</div>
                  ) : null}
                </Form.Text>              </FormGroup>
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
