import ToDo from '../ToDo/ToDo'
import { ToDosList } from './Styles'

interface IToDo {
  title: string
  id: number & string
  completed: boolean
}

interface IToDos {
  toDos: Array<IToDo>
  editMode: boolean
}

const ToDos: React.FC<IToDos> = ({ toDos, editMode }) => {
  return (
    <ToDosList>
      {toDos.map(({ title, id, completed }) => (
        <ToDo
          title={title}
          id={id}
          completed={completed}
          editMode={editMode}
          key={id}
        />
      ))}
    </ToDosList>
  )
}

export default ToDos
