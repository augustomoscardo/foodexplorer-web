import { Container } from './styles'

export function IngredientItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container>
      <input type="text"
        type='text'
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button onClick={onClick} type='button' className={isNew ? 'button-add' : 'button-delete'}>

      </button>
    </Container>
  )
}