import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import logoExplorer from '../../assets/logo.svg'

import { Container, Logo, Form } from './styles'
import { useAuth } from '../../hooks/auth'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useAuth()

  async function handleSignIn(e) {
    e.preventDefault

    if (!email || !password) return alert('Informe o e-mail e senha.')

    await signIn({ email, password })
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
          textLabel='E-mail'
          placeholder='Exemplo: exemplo@exemplo.com.br'
          type='text'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          textLabel='Senha'
          placeholder='No mínimo 6 caracteres'
          type='password'
          onChange={e => setPassword(e.target.value)}
        />

        <Button type='button' text='Entrar' onClick={handleSignIn} />

        <Link to='/register'>
          Criar conta
        </Link>
      </Form>
    </Container>
  )
}