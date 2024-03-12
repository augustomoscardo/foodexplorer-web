import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import { AddToCartContainer, Container } from './styles'
import { Heart, Minus, PencilSimple, Plus } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Card({ dish }) {
  const [counter, setCounter] = useState(1)

  const { user } = useAuth()
  const navigate = useNavigate()

  const imageURL = `${api.defaults.baseURL}/files/${dish.avatar}`

  function handleDishPage() {
    navigate(`/edit/${dish.id}`)
  }

  function handleIncrement() {
    setCounter(state => state + 1)
  }

  function handleDecrement() {
    setCounter(state => state - 1)
  }


  return (
    <Container>
      {user.role === 'admin' ? (
        <button onClick={handleDishPage}>
          <PencilSimple size={24} />
        </button>
      ) : (
        <button onClick={handleDishPage}>
          <Heart size={24} />
        </button>
      )}

      <img src={imageURL} alt={`Imagem do prato ${dish.title}`} />
      <Link to={`/dish/${dish.id}`}>{dish.title}</Link>
      <p>{dish.description}</p>
      <span>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(dish.price)}
      </span>

      {user.role === 'user' && (
        <AddToCartContainer>
          <div>
            <button onClick={handleDecrement} ><Minus size={24} /></button>
            <span>{String(counter).padStart(2, '0')}</span>
            <button onClick={handleIncrement} ><Plus size={24} /></button>
          </div>
          <button>Incluir</button>
        </AddToCartContainer>
      )}
    </Container >
  )
}