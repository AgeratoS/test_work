import styled from "styled-components";

const Header = styled.h3`
  text-transform: uppercase;
  font-size: 1.5rem;
  font-family: 'Libertad', sans-serif;
  color: ${({ theme }) => theme.primary}
`

export default Header;