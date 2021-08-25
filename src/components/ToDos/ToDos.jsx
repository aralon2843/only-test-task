import ToDo from '../ToDo/ToDo'
import { ToDosList } from './Styles'

const ToDos = ({ toDos, editMode, onTitleClickEditMode }) => {
  return (
    <ToDosList>
      {toDos.map(({ title, id, completed }) => (
        <ToDo
          title={title}
          id={id}
          key={id}
          completed={completed}
          editMode={editMode}
          onTitleClickEditMode={onTitleClickEditMode}
        />
      ))}
    </ToDosList>
  )
}

export default ToDos
