import logo from './logo.svg';
import './App.css';
import Form from './Form'
import React, { useState, useEffect } from 'react'
import formSchema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';


const members = [{
  firstName: 'George',
  lastName: 'Strait',
  email: 'gstrait@tnbywayoftx.com',
  role: 'lover and performer',
  password: 'countryrocks',
  terms: true
}]

const initialMemberData = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
  terms: false
}

const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
  password: "",
  terms: ""
}

const initialDisabled = true;

function App() {
  const [roster, setRoster] = useState(members);
  const [formValues, setFormValues] = useState(initialMemberData);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postNewPerson = newPerson => {
    axios.post('https://reqres.in/api/users', newPerson)
      .then(res => {
        console.log(res)
        setRoster(members.concat(newPerson))
      }) .catch(err => console.error(err))
      .finally(() => setFormValues(initialMemberData))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
  }

  const change  = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
 }

 const formSubmit = () => {
  const newPerson = {
    firstName: formValues.firstName.trim(),
    lastName: formValues.lastName.trim(),
    email: formValues.email.trim(),
    role: formValues.role.trim(),
    password: formValues.password.trim(),
    terms: formValues.terms
  }
  postNewPerson(newPerson)
 }

 useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <Form change={change} values={formValues} disabled={disabled} submit={formSubmit} errors={formErrors}/>
        <br>
        </br>
        <div>
          { roster.map((mem, idx) => {
            return (
              <div key={idx}>
                {mem.firstName} {mem.lastName}
                <br></br> 
                {mem.email}
                <br></br>
                {mem.role} 
                </div>
            )
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
