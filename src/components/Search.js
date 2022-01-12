const Search = props => (
  <div>
    <h2>{props.children}</h2>
    <div>Найдется всё, например <a href={props.link}>{props.example}</a></div>
  </div>
)
export default Search;