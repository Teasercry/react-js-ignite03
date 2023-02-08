import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
`

interface NumberPaginationProps {
  active?: boolean
}

export const NumberPagination = styled.span<NumberPaginationProps>`
  width: 40px;
  height: 40px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.active ? props.theme['green-700'] : props.theme['gray-600']};
  color: ${(props) =>
    props.active ? props.theme.white : props.theme['gray-400']};

  border-radius: 6px;

  &:hover {
    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
  }
`

interface NavPaginationProps {
  active?: boolean
}

export const NavPagination = styled.span<NavPaginationProps>`
  cursor: pointer;
  font-size: 24px;
  color: ${(props) =>
    props.active ? props.theme['green-700'] : props.theme['gray-600']};

  &:hover {
    color: ${(props) => props.theme['green-500']};
  }
`
