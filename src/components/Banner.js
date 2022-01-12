const Banner = props => (
  <a title={props.title} href={props.link}>
    <img src={props.src} alt={props.title} />
  </a>
)
export default Banner;