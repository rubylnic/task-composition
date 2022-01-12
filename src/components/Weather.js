const Weather = props => (
  <div>
    <img alt={props.type} />
    <p>{props.main}</p>
    <span>Утром : {props.morning}</span>
    <span>Ночью: {props.night}</span>
  </div>
)
export default Weather;