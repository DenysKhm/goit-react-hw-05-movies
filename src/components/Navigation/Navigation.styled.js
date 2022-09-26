import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
text-decoration: none;
padding: 12px;
color: green;

&.active {
    color: orange;
}
`

export const Title = styled.ul`
  display: flex;
  list-style: none;
`;