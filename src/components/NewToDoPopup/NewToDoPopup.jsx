import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  Button,
  Buttons,
  ErrorMessage,
  PopupWrapper,
  TextArea,
} from '../../common/PopupStyles'
import { addToDo } from '../../redux/actionCreators/toDos'

const NewToDoPopup = ({ closePopup, newToDoId }) => {
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: '',
  })

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const dispatch = useDispatch()

  const onChangeHandler = (title) => {
    setNewToDo({
      id: newToDoId,
      title,
    })
    setErrorMessageVisible(false)
  }

  const onButtonClickHandler = () => {
    if (newToDo.title.trim() !== '') {
      closePopup()
      dispatch(addToDo(newToDo))
    } else {
      setErrorMessageVisible(true)
    }
  }

  return (
    <PopupWrapper>
      <TextArea
        height={160}
        placeholder='Введите текст задачи'
        onChange={(event) => onChangeHandler(event.target.value)}
        value={newToDo.title}
      />
      {errorMessageVisible && <ErrorMessage>Введите задачу</ErrorMessage>}
      <Buttons>
        <Button close onClick={closePopup}>
          Закрыть
        </Button>
        <Button add onClick={onButtonClickHandler}>
          Добавить
        </Button>
      </Buttons>
    </PopupWrapper>
  )
}

export default NewToDoPopup
