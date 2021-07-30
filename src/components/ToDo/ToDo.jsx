import { useDispatch } from 'react-redux'
import {
  addDoneToDo,
  deleteToDo,
  removeDoneToDo,
} from '../../redux/actionCreators/toDos'
import Checkbox from './Checkbox/Checkbox'
import DeleteButton from './DeleteButton/DeleteButton'
import { ToDoItem, Title } from './Styles'

const ToDo = ({ title, id, isDone, editMode, onTitleClickEditMode }) => {
  const dispatch = useDispatch()
  const onToDoClickHandler = (id) => {
    if (!editMode) {
      isDone ? dispatch(removeDoneToDo(id)) : dispatch(addDoneToDo(id))
    }
  }

  const onDeleteClickHandler = (id) => {
    dispatch(deleteToDo(id))
  }

  const onTitleClickHandler = (id, title) => {
    if (editMode) {
      onTitleClickEditMode(id, title)
    }
  }

  return (
    <ToDoItem
      onClick={() => {
        onToDoClickHandler(id)
      }}>
      {editMode ? (
        <DeleteButton onDeleteClick={() => onDeleteClickHandler(id)} />
      ) : (
        <Checkbox isDone={isDone} />
      )}
      <Title isDone={isDone} onClick={() => onTitleClickHandler(id, title)}>
        {title}
      </Title>
    </ToDoItem>
  )
}

export default ToDo
