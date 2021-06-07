import styled from "styled-components"
import { Form } from "formik"
import { Button } from "@material-ui/core"

const NiceButton = styled(Button)`
  border-radius: 1rem;
  background-image: linear-gradient(45deg, #fe6b8b 0%, #ff8e53 100%);
`

const SmartFormikForm = styled(Form)`
  display: grid;
  grid-gap: 16px;
  grid-auto-flow: column;
  align-items: center;
`

const Title = styled.h1`
  font-size: 14px;
  display: flex;
  justify-content: center;
  bottom: 1rem;
  width: 100;
`

const SmartForm = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  ${({ abc }) => abc}: 1rem;
  width: 100%;
`

const Wrapper = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.25),
    inset -5px -5px 8px rgba(0, 0, 0, 0.25), 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

export default {
  NiceButton,
  SmartFormikForm,
  Title,
  SmartForm,
  Wrapper,
}
