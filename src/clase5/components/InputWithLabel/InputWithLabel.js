const InputWithLabel = ({ label, type, htmlFor, value, onChange }) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <input role={type} onChange={onChange} value={value} type={type} id={htmlFor} />
    </div>
  )
}

export default InputWithLabel
