import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  Wrapper,
  Button,
  Header,
  Content,
  Title,
  AddButton,
  NoToDosTitle,
} from './appStyles'

import EditToDoPopup from './components/EditToDoPopup/EditToDoPopup'
import NewToDoPopup from './components/NewToDoPopup/NewToDoPopup'
import ToDos from './components/ToDos/ToDos'

import plus from './assets/plus.svg'

const App = () => {
  const toDos = useSelector((state) => state.toDos.toDos)

  const lastToDoId = toDos.length - 1

  const [editToDoPopupVisible, setEditToDoPopupVisible] = useState(false)
  const [newToDoPopupVisible, setNewToDoPopupVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editToDo, setEditToDo] = useState({})

  const onCloseClickHandler = () => {
    setNewToDoPopupVisible(false)
  }

  const onAddClickHandler = () => {
    setNewToDoPopupVisible(false)
  }

  const onButtonClickHandler = () => {
    setEditMode(!editMode)
  }

  const onTitleClickEditMode = (id, title) => {
    setEditToDoPopupVisible(true)
    setEditToDo({
      title,
      id,
    })
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>Сегодня</Title>
          <Button onClick={onButtonClickHandler}>
            {editMode ? 'Отменить' : 'Править'}
          </Button>
        </Header>
        {toDos.length > 0 ? (
          <ToDos
            toDos={toDos}
            editMode={editMode}
            onTitleClickEditMode={onTitleClickEditMode}
          />
        ) : (
          <NoToDosTitle>Список задач пуст</NoToDosTitle>
        )}
        {newToDoPopupVisible ? (
          <NewToDoPopup
            onCloseClick={onCloseClickHandler}
            onAddClick={onAddClickHandler}
            newToDoId={lastToDoId + 1}
          />
        ) : (
          ''
        )}
        {editToDoPopupVisible ? (
          <EditToDoPopup
            prevTitle={editToDo.title}
            id={editToDo.id}
            closePopup={() => setEditToDoPopupVisible(false)}
          />
        ) : (
          ''
        )}
        {editMode ? (
          ''
        ) : (
          <AddButton
            background={plus}
            onClick={() => setNewToDoPopupVisible(true)}
          />
        )}
      </Content>
    </Wrapper>
  )
}

export default App
