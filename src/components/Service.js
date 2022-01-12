import PropTypes from 'prop-types';

const Service = props => (
  <div>
    <a href={props.href}>
      <img src={props.imgLink} alt={props.title} />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </a>
  </div>
)


Service.propTypes = {
  imgLink: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string
};

export default Service;

