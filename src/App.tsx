import { RootState } from './redux/store'
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

import NewToDoModal from './components/NewToDoModal/NewToDoModal'
import ToDos from './components/ToDos/ToDos'

import plus from './assets/plus.svg'

const App = () => {
  const toDos = useSelector((state: RootState) => state.toDos.toDos)

  const lastToDoId = toDos.length - 1

  const [newToDoModalVisible, setNewToDoModalVisible] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const closeNewToDoModal = () => {
    setNewToDoModalVisible(false)
  }

  const onAddButtonClickHandler = () => {
    setNewToDoModalVisible(true)
  }

  const onButtonClickHandler = () => {
    setEditMode(!editMode)
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
          <ToDos toDos={toDos} editMode={editMode} />
        ) : (
          <NoToDosTitle>Список задач пуст</NoToDosTitle>
        )}
        {newToDoModalVisible && (
          <NewToDoModal
            closeModal={closeNewToDoModal}
            newToDoId={lastToDoId + 1}
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
