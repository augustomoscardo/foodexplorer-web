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
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function EditDish() {
  // const { user } = useAuth()

  const [dish, setDish] = useState({})
  const [dishName, setDishName] = useState(dish.title)
  const [category, setCategory] = useState(dish.category)
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState(dish.price)
  const [description, setDescription] = useState(dish.description)

  const [dishFileImage, setDishFileImage] = useState(dish.avatar)
  const avatarURL = dishFileImage ? `${api.defaults.baseURL}/files/${dishFileImage}` : ''
  const [dishImage, setDishImage] = useState(avatarURL)

  const navigate = useNavigate()
  const dishParams = useParams()

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
  console.log(ingredients);

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

  useEffect(() => {
    async function getDish() {
      try {
        const response = await api.get(`/dishes/${dishParams.id}`, {
          withCredentials: true
        })

        const { dish } = response.data
        setDish(dish)
        setIngredients(response.data.dish.ingredients)
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          alert('Não foi possível encontrar o pratos.')
        }
      }
    }

    getDish()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <button onClick={handleBack}>
          <CaretLeft size={32} weight="bold" />
          voltar
        </button>

        <h1>Adicionar prato</h1>

        {Object.entries(dish).length && (
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
                value={dish.title}
              />
              <Select textLabel='Categoria' onChange={(e) => setCategory(e.target.value)} value={dish.category} />
            </div>

            {dishImage && <div className="imagePreview">
              <img src={dishImage} />
              <button type="button"><X /></button>
            </div>}

            <div className="ingredientsAndPrice">
              <Ingredients textLabel='Ingredientes'>
                {dish?.ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient.name}
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
                value={dish.price}
              />
            </div>

            <Textarea
              textLabel='Descrição'
              placeholder='Fale brevemente sobre o prato, seus ingredientes e composição'
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={dish.description}
            />

            <Button text='Salvar alterações' onClick={handleCreateDish} />
          </Form>
        )}

      </Container>
      <Footer />
    </>
  )
}