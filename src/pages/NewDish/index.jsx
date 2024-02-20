import { CaretLeft, UploadSimple, X } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";
import { Footer } from "../../components/Footer";
import { useState } from "react";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { IngredientItem } from "../../components/IngredientItem";
import { Ingredients } from "../../components/Ingredients";
import { useAuth } from "../../hooks/auth";

export function NewDish() {
  const { user } = useAuth()

  const [dishName, setDishName] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')

  const [dishFileImage, setDishFileImage] = useState(null)
  const avatarURL = dishFileImage ? `${api.defaults.baseURL}/files/${dishFileImage}` : ''
  const [dishImage, setDishImage] = useState(avatarURL)

  const navigate = useNavigate()

  function handleChangeDishAvatar(e) {
    const file = e.target.files[0]
    setDishFileImage(file)

    const imagePreview = URL.createObjectURL(file)
    setDishImage(imagePreview)
  }

  function handleAddIngredient() {
    setIngredients(state => [...state, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(ingredientToDelete) {
    const filteredIngredients = ingredients.filter(ingredient => ingredient != ingredientToDelete)

    setIngredients(filteredIngredients)
  }

  async function handleCreateDish(e) {
    e.preventDefault()

    if (!dishName || !category || !ingredients.length || !price || !description || !dishFileImage) {
      return alert('Todos os campos são obrigatórios')
    }

    if (newIngredient) {
      return alert('Você deixou uma tag no campo para adicionar mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio.')
    }

    try {
      const formData = new FormData();
      formData.append("avatar", dishFileImage);
      formData.append("title", dishName);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      for (let i = 0; i < ingredients.length; i += 1) {
        formData.append("ingredients", ingredients[i]);
      }

      const response = await api.post(`/dishes/${user.id}`, formData, { withCredentials: true })

      alert(response.data.message)
      navigate('/')
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert('Erro ao cadastrar o prato.')
      }
    }
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <>
      <Header />
      <Container>
        <button onClick={handleBack}>
          <CaretLeft size={32} weight="bold" />
          voltar
        </button>

        <h1>Adicionar prato</h1>

        <Form>
          <div>
            <div className="fileInput">
              <span>Imagem do prato</span>
              <label htmlFor="ingredientImg">
                <UploadSimple size={24} />
                Selecione imagem
              </label>
              <input type="file" id="ingredientImg" onChange={handleChangeDishAvatar} />
            </div>

            <Input
              textLabel='Nome'
              type='text'
              placeholder='Ex.: Salada Ceasar'
              onChange={e => setDishName(e.target.value)}
            />
            <Select textLabel='Categoria' onChange={(e) => setCategory(e.target.value)} />
          </div>

          {dishImage && <div className="imagePreview">
            <img src={dishImage} />
            <button type="button"><X /></button>
          </div>}

          <div className="ingredientsAndPrice">
            <Ingredients textLabel='Ingredientes'>
              {ingredients.map((ingredient, index) => (
                <IngredientItem
                  key={String(index)}
                  value={ingredient}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
              ))}

              <IngredientItem
                isNew
                placeholder="Adicionar"
                onChange={e => setNewIngredient(e.target.value)}
                value={newIngredient}
                onClick={handleAddIngredient}
              />
            </Ingredients>

            <Input
              textLabel='Preço'
              type='number'
              placeholder='R$ 00,00'
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <Textarea
            textLabel='Descrição'
            placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
            onChange={(e) => setDescription(e.target.value)}
          />

          <Button text='Salvar alterações' onClick={handleCreateDish} />
        </Form>

      </Container>
      <Footer />
    </>
  )
}