import React from 'react';
import {Link} from 'react-router-dom'


import logo from '../../assets/logo.svg'


// import { Container } from './styles';

export default function SingIn() {
  return (
    <>
    <img src={logo} alt="gobarber"/>
    <form>
      <input type="email" placeholder="Seu E-mail" />
      <input type="password" placeholder="Sua Senha"/>
      <button type="submit" >Acessar</button>
      <Link to="/register" >Criar Conta Gratuita</Link>
    </form>
    </>
  );
}
