import { useSelector } from 'react-redux'
import ToDo from '../ToDo/ToDo'
import { ToDosList } from './Styles'

const ToDos = ({ toDos, editMode, onTitleClickEditMode }) => {
  const doneToDos = useSelector((state) => state.toDos.doneToDos)

  return (
    <ToDosList>
      {toDos.map((toDo) => (
        <ToDo
          title={toDo.title}
          id={toDo.id}
          key={toDo.id}
          isDone={
            doneToDos.find((doneToDo) => doneToDo === toDo.id) === toDo.id
          }
          editMode={editMode}
          onTitleClickEditMode={onTitleClickEditMode}
        />
      ))}
    </ToDosList>
  )
}

export default ToDos
