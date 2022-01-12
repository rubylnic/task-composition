import PropTypes from 'prop-types';

const VisitedItem = props => (
  <>
    <div>
      <a href={props.link}
        title={props.title}>
        {props.title}
      </a>
      <span>{props.about}</span>
    </div>
  </>

)

VisitedItem.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string
};

export default VisitedItem;