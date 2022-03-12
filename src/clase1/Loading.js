const Loading = props => {
  if (props.show) return 'Loading...'

  return props.children
}

export default Loading
