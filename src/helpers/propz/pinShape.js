import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export default { pinShape };
