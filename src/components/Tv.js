import TvItem from "./TvItem";
const Tv = props => (
  <div>
    <h1>{props.children}</h1>
    <TvItem
      time="12:00"
      program="Тимон и Пумба"
      channel="СТС"
      link="#"
    />
  </div>
)
export default Tv;