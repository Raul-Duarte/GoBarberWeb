import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo.svg'

const schema = Yup.object().shape({
  email: Yup.string()
  .email('Insira um e-mail valido')
  .required('O e-mail é obrigatorio'),
  password: Yup.string().required('Senha é Obrigatoria'),
})
 
export default function SingIn() {
  function handleSubmit(data){
    console.tron.log(data)
  }
  return (
    <>
    <img src={logo} alt="gobarber"/>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="email" type="email" placeholder="Seu e-mail" />
      <Input name="password" type="password" placeholder="Sua Senha"/>
      <button type="submit" >Acessar</button>
      <Link to="/register" >Criar Conta Gratuita</Link>
    </Form>
    </>
  );
}
