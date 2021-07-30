import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Buttons,
  ErrorMessage,
  PopupWrapper,
  TextArea,
} from '../../common/PopupStyles'
import { editToDoTitle } from '../../redux/actionCreators/toDos'

const EditToDoPopup = ({ prevTitle, id, closePopup }) => {
  const [newTitle, setNewTitle] = useState(prevTitle)

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const textAreaRef = useRef()

  const dispatch = useDispatch()

  const onSaveClickHandler = (id, newTitle) => {
    if (newTitle !== '') {
      closePopup()
      dispatch(editToDoTitle({ id, newTitle }))
    } else {
      setErrorMessageVisible(true)
    }
  }

  return (
    <PopupWrapper>
      <TextArea
        height={50}
        onChange={() => setNewTitle(textAreaRef.current.value)}
        defaultValue={prevTitle}
        ref={textAreaRef}
        edit></TextArea>
      {errorMessageVisible ? (
        <ErrorMessage>Переименуйте задачу</ErrorMessage>
      ) : (
        ''
      )}
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
