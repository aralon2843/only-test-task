import { DeleteButtonWrapper, Minus } from './Styles'

const DeleteButton = ({ onDeleteClick }) => {
  return (
    <DeleteButtonWrapper onClick={onDeleteClick}>
      <Minus />
    </DeleteButtonWrapper>
  )
}

export default DeleteButton
