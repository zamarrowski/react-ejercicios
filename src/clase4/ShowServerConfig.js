import PropTypes from 'prop-types'

const ShowServerConfig = props => <h1>holi</h1>

ShowServerConfig.propTypes = {
  config: PropTypes.exact({
    minConnections: PropTypes.number.isRequired,
    maxConnections: PropTypes.number.isRequired,
    restartAlways: PropTypes.bool.isRequired,
  }).isRequired,
  environment: PropTypes.oneOf(['dev', 'play', 'live']).isRequired,
  SSL: props => {
    if (props.environment === 'live' && !props.SSL) return new Error('SSL is required if environment is live')
  },
}

export default ShowServerConfig
