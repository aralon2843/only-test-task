import styled from 'styled-components'

export const ToDoItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 31px;
`

interface ITitle {
  isDone: boolean
}

export const Title = styled.label<ITitle>`
  font-size: 18px;
  font-weight: 500;
  color: ${({ isDone }) => (isDone ? '#666666' : '#000000')};
  transition: 0.3s ease color;
  width: 100%;
  max-width: 768px;
  cursor: pointer;
`

interface ICheckbox {
  icon: string
}

export const Checkbox = styled.input<ICheckbox>`
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
    background: url(${({ icon }) => icon}) center no-repeat;
  }
`

interface IDeleteButton {
  icon: string
}

export const DeleteButton = styled.span<IDeleteButton>`
  flex: 0 0 auto;
  width: 22px;
  height: 22px;
  margin-right: 14px;
  cursor: pointer;
  background: url(${({ icon }) => icon}) left no-repeat;
`
