import PropTypes from 'prop-types';

const TvItem = props => (
  <div>
    <span>{props.time}</span>
    <a href={props.link} title={props.program}>{props.program}</a>
    <span>{props.channel}</span>
  </div>
)

TvItem.propTypes = {
  program: PropTypes.string,
  channel: PropTypes.string,
  time: PropTypes.string,
  link: PropTypes.string
};
export default TvItem;

