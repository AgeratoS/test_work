import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 3rem;
  font-family: 'Libertad', sans-serif;
  border: 5px solid transparent;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  transition: all .2s ease-in;
  font-size: 1.25rem;
  
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.secondary};
    background-color: ${({ theme }) => theme.primary};
  }
`

export default Button;