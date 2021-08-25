import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Button,
  Buttons,
  ErrorMessage,
  ModalWrapper,
  TextArea,
} from '../../common/ModalStyles'

import { editToDo } from '../../redux/actionCreators/toDos'

interface IEditToDoModal {
  prevTitle: string
  id: number
  closeModal: () => void
}

const EditToDoModal: React.FC<IEditToDoModal> = ({
  prevTitle,
  id,
  closeModal,
}) => {
  const [newTitle, setNewTitle] = useState(prevTitle)

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const dispatch = useDispatch()

  const onSaveClickHandler = (id: number, newTitle: string) => {
    if (newTitle.trim() !== '') {
      closeModal()
      dispatch(editToDo({ id, newTitle }))
    } else {
      setErrorMessageVisible(true)
    }
  }

  const onChangeHandler = (newTitle: string) => {
    setNewTitle(newTitle)
  }

  return (
    <ModalWrapper>
      <TextArea
        edit
        height={50}
        onChange={(event) => onChangeHandler(event.target.value)}
        defaultValue={prevTitle}
      />
      {errorMessageVisible && <ErrorMessage>Переименуйте задачу</ErrorMessage>}
      <Buttons>
        <Button close onClick={closeModal}>
          Закрыть
        </Button>
        <Button add onClick={() => onSaveClickHandler(id, newTitle)}>
          Сохранить
        </Button>
      </Buttons>
    </ModalWrapper>
  )
}

export default EditToDoModal
