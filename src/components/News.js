import NewsItem from "./NewsItem";
const News = props => (
  <div className="news">
    <h2>{props.children}</h2>
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
    <NewsItem text="Новостные новости" url="https://yandex.ru/" />
  </div>
)
export default News;