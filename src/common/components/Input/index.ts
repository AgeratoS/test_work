import styled from "styled-components";

const Input = styled.input`
  display: block;
  box-sizing: border-box;
  min-width: 100%;
  font-family: 'Libertad', sans-serif;
  border: none;
  border-bottom: 5px solid ${({ theme }) => theme.primary};
  padding: 1rem 1.5rem;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.secondary};
  outline: none;
`

export default Input;