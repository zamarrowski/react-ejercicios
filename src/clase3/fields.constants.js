const fields = state => [
  {
    name: 'firstName',
    value: state.firstName,
    placeHolder: 'nombre',
  },
  {
    name: 'lastName',
    value: state.lastName,
    placeHolder: 'apellidos',
  },
  {
    name: 'address',
    value: state.address,
    placeHolder: 'dirección',
  },
]

export default fields
