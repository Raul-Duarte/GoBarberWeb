import React from 'react';
import {Link} from 'react-router-dom'
import {Form, Input} from '@rocketseat/unform'
import * as Yup from 'yup'

import logo from '../../assets/logo.svg'

const schema = Yup.object().shape({
  name: Yup.string().required('O Nome é Obrigatorio'),
  email: Yup.string()
  .email('Insira Um e-mail Valido')
  .required('O e-mail é Obrigatorio'),
  password: Yup.string()
  .min(6,'No Mínimo 6 Caracteres')
  .required('Senha é Obrigatoria'),
})

export default function SingUp() {

  function handleSubmit(data){
    console.tron.log(data)
  }

  return (
    <>
    <img src={logo} alt="gobarber"/>
    <Form schema={schema} onSubmit={handleSubmit}>
      <Input name="name" placeholder="Nome Completo"/>
      <Input name="email" type="email" placeholder="Seu E-mail" />
      <Input name="password" type="password" placeholder="Sua Senha"/>
      <button type="submit" >Criar Conta</button>
      <Link to="/" >Já Tenho Conta</Link>
    </Form>
    </>
  );
}
