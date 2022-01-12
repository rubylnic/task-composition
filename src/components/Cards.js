import Card from "./Card";

const Cards = props => (
  <>
    <Card img='https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg'>
      <h5 className="card-title">Серый кот</h5>
      <p className="card-text">Текст про серого кота</p>
    </Card>
    <Card>
      <h5 className="card-title">Рыжий кот</h5>
      <p className="card-text">Текст про рыжего кота</p>
    </Card>
  </>
)
export default Cards;