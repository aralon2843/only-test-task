import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Buttons,
  ErrorMessage,
  PopupWrapper,
  TextArea,
} from '../../common/PopupStyles'
import { editToDo } from '../../redux/actionCreators/toDos'

const EditToDoPopup = ({ prevTitle, id, closePopup }) => {
  const [newTitle, setNewTitle] = useState(prevTitle)

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const dispatch = useDispatch()

  const onSaveClickHandler = (id, newTitle) => {
    if (newTitle.trim() !== '') {
      closePopup()
      dispatch(editToDo({ id, newTitle }))
    } else {
      setErrorMessageVisible(true)
    }
  }

  const onChangeHandler = (newTitle) => {
    setNewTitle(newTitle)
  }

  return (
    <PopupWrapper>
      <TextArea
        edit
        height={50}
        onChange={(event) => onChangeHandler(event.target.value)}
        defaultValue={prevTitle}
      />
      {errorMessageVisible && <ErrorMessage>Переименуйте задачу</ErrorMessage>}
      <Buttons>
        <Button close onClick={closePopup}>
          Закрыть
        </Button>
        <Button add onClick={() => onSaveClickHandler(id, newTitle)}>
          Сохранить
        </Button>
      </Buttons>
    </PopupWrapper>
  )
}

export default EditToDoPopup
