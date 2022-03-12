import Greeting from './Greeting'
import ShowDate from './ShowDate'

const ConditionalRender = ({ show }) => (
  <>
    <h1>La magia!</h1>
    {show ? <Greeting text="holi" /> : <ShowDate />}
  </>
)

export default ConditionalRender
