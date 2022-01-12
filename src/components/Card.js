import PropTypes from 'prop-types';
const Card = props => (
  <div className="card">
    {props.img ? <img src={props.img} className="card-img-top" alt="..." /> : ''}
    <div className="card-body">
      {props.children}
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
)

Card.propTypes = {
  img: PropTypes.string
};


export default Card;