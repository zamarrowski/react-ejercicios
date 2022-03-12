const Button = props => (
  <button onClick={props.onClick} className="btn">
    {props.label}
  </button>
)

export default Button
