import PropTypes from 'prop-types'

const Button = props => (
  <button onClick={props.onClick} className="btn">
    {props.label}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  label: 'Default text',
}

export default Button
