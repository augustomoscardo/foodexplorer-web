import { Container } from "./styles";

export function Textarea({ textLabel, value, ...rest }) {
  return (
    <Container>
      <label>{textLabel}</label>
      <textarea {...rest}>{value}</textarea>
    </Container>
  )
}