import { CheckboxDone, CheckboxWrapper } from './Styles'

const Checkbox = ({ isDone }) => {
  return <CheckboxWrapper>{isDone ? <CheckboxDone /> : ''}</CheckboxWrapper>
}

export default Checkbox
