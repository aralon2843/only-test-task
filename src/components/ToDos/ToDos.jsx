import { useSelector } from 'react-redux'
import ToDo from '../ToDo/ToDo'
import { ToDosList } from './Styles'

const ToDos = ({ toDos, editMode, onTitleClickEditMode }) => {
  const doneToDos = useSelector((state) => state.toDos.doneToDos)

  return (
    <ToDosList>
      {toDos.map(({ title, id }) => (
        <ToDo
          title={title}
          id={id}
          key={id}
          isDone={doneToDos.find((doneToDo) => doneToDo === id) === id}
          editMode={editMode}
          onTitleClickEditMode={onTitleClickEditMode}
        />
      ))}
    </ToDosList>
  )
}

export default ToDos
