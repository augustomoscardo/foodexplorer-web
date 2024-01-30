import { Receipt, SignOut } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { Search } from '../Search'
import { Button } from '../Button'

import logoImg from '../../assets/logo.svg'
import { useAuth } from '../../hooks/auth'

import { Container, Logo } from './styles'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  function handleHomePage() {
    navigate('/')
  }

  function handleNewDishPage() {
    navigate('/new')
  }

  return (
    <Container>
      <Logo onClick={handleHomePage}>
        <img src={logoImg} alt='Logo da trilha Explorer da Rocketseat' />
        <h3>food explorer</h3>
        {user.role === 'admin' && <span>admin</span>}
      </Logo>

      <Search />

      {user.role === 'admin' ?
        <Button text='Novo prato' onClick={handleNewDishPage} /> :
        <Button icon={<Receipt size={32} />} text='Pedidos (0)' />}

      <button className='signOutButton' type="button" onClick={signOut}>
        <SignOut size={32} />
      </button>
    </Container>
  )
}