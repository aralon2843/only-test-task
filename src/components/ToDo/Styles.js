import styled from 'styled-components'

export const ToDoItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 31px;
  cursor: pointer;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.isDone ? '#666666' : '#000000')};
  transition: 0.3s ease color;
  max-width: 768px;
`
