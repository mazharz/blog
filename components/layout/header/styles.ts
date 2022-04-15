import styled from "styled-components";

export const Container = styled.header`
  height: 3.8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.color8};
`;

export const Name = styled.div`
  font-size: 1.1rem;
`;

export const Nav = styled.nav`
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
`;

export const NavLink = styled.div`
  cursor: pointer;
  font-size: 0.9rem;
`;
