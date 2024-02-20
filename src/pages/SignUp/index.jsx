
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import logoExplorer from '../../assets/logo.svg'
import { Container, Logo, Form } from './styles'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  async function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    if (password.length < 6) {
      return alert("A senha deve conter no minímo 6 caracteres!");
    }

    try {
      const response = await api.post('/users', { name, email, password })

      alert(response.data.message)
      navigate('/')
    } catch (err) {
      console.log(err);
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Não foi possível cadastrar.')
      }
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logoExplorer} alt="Logo da trilha explorer da rocketseat" />
        <h1>food explorer</h1>
      </Logo>
      <Form>
        <h2>Faça login</h2>

        <Input
          textLabel='Nome'
          placeholder='Exemplo: Maria da Silva'
          type='text'
          onChange={e => setName(e.target.value)}
        />

        <Input
          textLabel='E-mail'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='email'
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          textLabel='Senha'
          placeholder='No mínimo 6 caracteres'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button type='button' text='Criar conta' onClick={handleSignUp} />

        <Link to='/'>
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}