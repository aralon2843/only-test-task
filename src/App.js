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

  const closeNewToDoPopup = () => {
    setNewToDoPopupVisible(false)
  }

  const closeEditToDoPopup = () => {
    setEditToDoPopupVisible(false)
  }

  const onAddButtonClickHandler = () => {
    setNewToDoPopupVisible(true)
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
          {(toDos.length > 0 || editMode) && (
            <Button onClick={onButtonClickHandler}>
              {editMode ? 'Отменить' : 'Править'}
            </Button>
          )}
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
        {newToDoPopupVisible && (
          <NewToDoPopup
            closePopup={closeNewToDoPopup}
            newToDoId={lastToDoId + 1}
          />
        )}
        {editToDoPopupVisible && (
          <EditToDoPopup
            prevTitle={editToDo.title}
            id={editToDo.id}
            closePopup={closeEditToDoPopup}
          />
        )}
        {!editMode && (
          <AddButton background={plus} onClick={onAddButtonClickHandler} />
        )}
      </Content>
    </Wrapper>
  )
}

export default App
