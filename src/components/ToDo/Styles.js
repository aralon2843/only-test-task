import styled from 'styled-components'

export const ToDoItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 31px;
`

export const Title = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.isDone ? '#666666' : '#000000')};
  transition: 0.3s ease color;
  max-width: 768px;
  width: 100%;
  cursor: pointer;
`
export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: flex;
    align-items: center;
    user-select: none;
  }

  & + label::before {
    content: '';
    display: inline-block;
    height: 18px;
    width: 18px;
    flex: 0 0 auto;
    border: 2px solid #d9d9d9;
    margin-right: 14px;
    border-radius: 50%;
  }

  &:checked + label::before {
    background: url(${(props) => props.icon}) center no-repeat;
  }
`
export const DeleteButton = styled.span`
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  margin-right: 14px;
  cursor: pointer;
  background: url(${(props) => props.icon}) left no-repeat;
`
