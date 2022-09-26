import { StyledNavLink, Title } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <Title>
      <li>{<StyledNavLink to='/' end>Home</StyledNavLink>}</li>
      <li>{<StyledNavLink to='movies'>Movies</StyledNavLink> }</li>
    </Title>
  );
};
