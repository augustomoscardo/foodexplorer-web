import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { Container } from './styles'
import { PencilSimple } from '@phosphor-icons/react'

export function Card({ dish }) {
  const { user } = useAuth()
  const navigate = useNavigate()

  const imageURL = `${api.defaults.baseURL}/files/${dish.avatar}`

  function handleDishPage() {
    navigate(`/dishes/${dish.id}`)
  }


  return (
    <Container>
      <button onClick={handleDishPage}>
        <PencilSimple size={24} />
      </button>
      <img src={imageURL} alt={`Imagem do prato ${dish.title}`} />
      <h3>{dish.title}</h3>
      <p>{dish.description}</p>
      <span>{new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(dish.price)}</span>
    </Container >
  )
}