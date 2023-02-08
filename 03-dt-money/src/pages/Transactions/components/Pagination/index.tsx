import { CaretLeft, CaretRight } from 'phosphor-react'
import { NavPagination, NumberPagination, PaginationContainer } from './styles'

export function Pagination() {
  return (
    <PaginationContainer>
      <NavPagination>
        <CaretLeft />
      </NavPagination>
      <NumberPagination active>1</NumberPagination>
      <NumberPagination>2</NumberPagination>
      <NumberPagination>3</NumberPagination>
      <NavPagination active>
        <CaretRight />
      </NavPagination>
    </PaginationContainer>
  )
}
