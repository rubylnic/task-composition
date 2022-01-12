import VisitedItem from "./VisitedItem";
const Visited = props => (
  <div>
    <h1>{props.children}</h1>
    <VisitedItem
      link="#"
      title="Недвидимость"
      about="о сталинках"
    />
    <VisitedItem
      link="#"
      title="Недвидимость"
      about="о сталинках"
    />
    <VisitedItem
      link="#"
      title="Недвидимость"
      about="о сталинках"
    />
    <VisitedItem
      link="#"
      title="Недвидимость"
      about="о сталинках"
    />
  </div>
)
export default Visited;