import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Button,
  Buttons,
  ErrorMessage,
  ModalWrapper,
  TextArea,
} from '../../common/ModalStyles'

import { addToDo } from '../../redux/actionCreators/toDos'

interface INewToDoModal {
  closeModal: () => void
  newToDoId: number
}

const NewToDoModal: React.FC<INewToDoModal> = ({ closeModal, newToDoId }) => {
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: '',
    completed: false,
  })

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const dispatch = useDispatch()

  const onChangeHandler = (title: string) => {
    setNewToDo({
      id: newToDoId,
      title,
      completed: false,
    })
    setErrorMessageVisible(false)
  }

  const onButtonClickHandler = () => {
    if (newToDo.title.trim() !== '') {
      closeModal()
      dispatch(addToDo(newToDo))
    } else {
      setErrorMessageVisible(true)
    }
  }

  return (
    <ModalWrapper>
      <TextArea
        height={160}
        edit={false}
        placeholder='Введите текст задачи'
        onChange={(event) => onChangeHandler(event.target.value)}
        value={newToDo.title}
      />
      {errorMessageVisible && <ErrorMessage>Введите задачу</ErrorMessage>}
      <Buttons>
        <Button close onClick={closeModal}>
          Закрыть
        </Button>
        <Button add onClick={onButtonClickHandler}>
          Добавить
        </Button>
      </Buttons>
    </ModalWrapper>
  )
}

export default NewToDoModal
