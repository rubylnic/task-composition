import AirItem from "./TvItem";
const Air = props => (
  <div>
    <h1>{props.children}</h1>
    <AirItem
      program="Burning man"
      channel="Антон Птушкин"
      link="#"
    />
  </div>
)
export default Air;