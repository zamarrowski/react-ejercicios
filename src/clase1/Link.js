const Link = props => (
  <a href={props.to} className={props.className} rel="noreferrer" target={props.openInNewTab ? '_blank' : '_self'}>
    {props.children}
  </a>
)

export default Link
