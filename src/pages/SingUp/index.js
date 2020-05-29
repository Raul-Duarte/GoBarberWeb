import React from 'react';
import {Link} from 'react-router-dom'


import logo from '../../assets/logo.svg'


// import { Container } from './styles';

export default function SingUp() {
  return (
    <>
    <img src={logo} alt="gobarber"/>
    <form>
      <input placeholder="Nome Completo"/>
      <input type="email" placeholder="Seu E-mail" />
      <input type="password" placeholder="Sua Senha"/>
      <button type="submit" >Criar Conta</button>
      <Link to="/" >Já Tenho Conta</Link>
    </form>
    </>
  );
}
