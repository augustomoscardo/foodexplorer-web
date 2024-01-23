import { Input } from '../../components/Input'
import { Container, Logo, Form } from './styles'

export function SignIn() {
  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>

        <Input
          textLabel='E-mail'
          placeholder=''
          type=''
          onChange={ }
        />
        <Input textLabel='Senha' />
      </Form>
    </Container>
  )
}