import { useState } from 'react'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Container, Logo, Form } from './styles'

import logoExplorer from '../../assets/logo.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn() {
    console.log(email, password);
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
          placeholder=''
          type='text'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          textLabel='Senha'
          placeholder=''
          type=''
          onChange={e => setPassword(e.target.value)}
        />

        <Button onClick={handleSignIn} />
      </Form>
    </Container>
  )
}