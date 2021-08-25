import { useDispatch } from 'react-redux'
import { deleteToDo, toggleToDo } from '../../redux/actionCreators/toDos'

import deleteButton from '../../assets/delete.svg'
import completedCheckbox from '../../assets/completed.svg'

import { ToDoItem, Title, Checkbox, DeleteButton } from './Styles'

const ToDo = ({ title, id, completed, editMode, onTitleClickEditMode }) => {
  const dispatch = useDispatch()

  const onDeleteClickHandler = (id) => {
    dispatch(deleteToDo(id))
  }

  const onTitleClickHandler = (id, title) => {
    if (editMode) {
      onTitleClickEditMode(id, title)
    }
  }

  return (
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
          onChange={() => dispatch(toggleToDo(id))}
        />
      )}
      <Title
        htmlFor={id}
        isDone={completed}
        onClick={() => {
          onTitleClickHandler(id, title)
        }}>
        {title}
      </Title>
    </ToDoItem>
  )
}

export default ToDo
