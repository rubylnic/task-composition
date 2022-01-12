const NewsItem = props => (
  <a className="news-item" href={props.url} title={props.text}>
    {props.text}
  </a>
)
export default NewsItem;