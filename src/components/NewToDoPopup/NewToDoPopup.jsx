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
import { setToDo } from '../../redux/actionCreators/toDos'

const NewToDoPopup = ({ onCloseClick, onAddClick, newToDoId }) => {
  const [newToDo, setNewToDo] = useState({
    id: 0,
    title: '',
  })

  const [errorMessageVisible, setErrorMessageVisible] = useState(false)

  const textAreaRef = useRef()

  const dispatch = useDispatch()

  const onChangeHandler = () => {
    setNewToDo({
      id: newToDoId,
      title: textAreaRef.current.value,
    })
    setErrorMessageVisible(false)
  }

  const onButtonClickHandler = () => {
    if (newToDo.title !== '') {
      onAddClick()
      dispatch(setToDo(newToDo))
    } else {
      setErrorMessageVisible(true)
    }
  }

  return (
    <PopupWrapper>
      <TextArea
        height={160}
        placeholder='Введите текст задачи'
        onChange={onChangeHandler}
        value={newToDo.title}
        ref={textAreaRef}></TextArea>
      {errorMessageVisible ? <ErrorMessage>Введите задачу</ErrorMessage> : ''}
      <Buttons>
        <Button close onClick={onCloseClick}>
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
