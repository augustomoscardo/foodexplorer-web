import { CaretLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { Textarea } from "../../components/Textarea";
import { Select } from "../../components/Select";

export function NewDish() {
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Container>

        <button onClick={navigate(-1)}>
          <CaretLeft />
          voltar
        </button>

        <h1>Adicionar prato</h1>

        <Form>
          <div>
            <Input textLabel='Imagem do prato' type='file' />
            <Input textLabel='Nome' type='text' placeholder='Ex.: Salada Ceasar' />
            {/* <select name="categoria">
              <option value="">Selecione uma categoria</option>
              <option value="refeicao">Refeição</option>
              <option value="sobremesa">Sobremesa</option>
              <option value="bebida">Bebida</option>
            </select> */}
            <Select textLabel='Categoria' />
          </div>

          <div>
            <div className="ingredients">
              {/* {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTag}
              /> */}
            </div>
            <Input textLabel='Preço' type='number' placeholder='R$ 00,00' />
          </div>

          <Textarea textLabel='Descrição' placeholder='Fale brevemente sobre o prato, seus ingredientes e composição' />
        </Form>

      </Container>
    </>
  )
}