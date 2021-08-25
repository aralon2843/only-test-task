import { useDispatch } from 'react-redux'
import { useState } from 'react'

import deleteButton from '../../assets/delete.svg'
import completedCheckbox from '../../assets/completed.svg'

import { ToDoItem, Title, Checkbox, DeleteButton } from './Styles'

import { deleteToDo, toggleToDo } from '../../redux/actionCreators/toDos'

import EditToDoModal from '../EditToDoModal/EditToDoModal'

interface IToDo {
  title: string
  id: number & string
  completed: boolean
  editMode: boolean
}

const ToDo: React.FC<IToDo> = ({ title, id, completed, editMode }) => {
  const dispatch = useDispatch()

  const [editToDo, setEditToDo] = useState({
    title: '',
    id: 0,
  })
  const [editToDoModalVisible, setEditToDoModalVisible] = useState(false)

  const onTitleClickHandler = (id: number, title: string) => {
    if (editMode) {
      onTitleClickEditMode(id, title)
    }
  }

  const onTitleClickEditMode = (id: number, title: string) => {
    setEditToDoModalVisible(true)
    setEditToDo({
      title,
      id,
    })
  }

  const closeEditToDoModal = () => {
    setEditToDoModalVisible(false)
  }

  const onDeleteClickHandler = (id: number) => {
    dispatch(deleteToDo(id))
  }

  const onCheckboxChangeHandler = (id: number) => {
    dispatch(toggleToDo(id))
  }

  return (
    <>
      <ToDoItem>
        {editMode ? (
          <DeleteButton
            icon={deleteButton}
            onClick={() => onDeleteClickHandler(id)}
          />
        ) : (
          <Checkbox
            type='checkbox'
            id={id}
            disabled={editMode}
            checked={completed}
            icon={completedCheckbox}
            onChange={() => onCheckboxChangeHandler(id)}
          />
        )}
        <Title
          htmlFor={id}
          isDone={completed}
          onClick={() => onTitleClickHandler(id, title)}>
          {title}
        </Title>
      </ToDoItem>
      {editToDoModalVisible && (
        <EditToDoModal
          prevTitle={editToDo.title}
          id={editToDo.id}
          closeModal={closeEditToDoModal}
        />
      )}
    </>
  )
}

export default ToDo
