import PropTypes from 'prop-types';

const AirItem = props => (
  <div>
    <a href={props.link} title={props.program}>{props.program}</a>
    <span>{props.channel}</span>
  </div>
)


AirItem.propTypes = {
  program: PropTypes.string,
  channel: PropTypes.string,
  link: PropTypes.string
};

export default AirItem;
