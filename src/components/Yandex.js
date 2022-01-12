import News from "./News";
import Search from "./Search";
import Banner from "./Banner";
import Weather from "./Weather";
import Tv from "./Tv";
import Air from "./Air";
import Visited from "./Visited";
import Service from "./Service";
const Yandex = props => (
  <>
    <News>Новости</News>
    <Service
      title="Работа над ошибками"
      text="Смотрите и запоминайте"
      href="#"
      imgLink="#"
    />

    <Search
      example="Как обучить ежа читать"
      link="https://yandex.ru/search/?lr=2&text=%D0%BA%D0%B0%D0%BA+%D0%BE%D0%B1%D1%83%D1%87%D0%B8%D1%82%D1%8C+%D0%B5%D0%B6%D0%B0+%D1%87%D0%B8%D1%82%D0%B0%D1%82%D1%8C&src=suggest_In">Поиск</Search>

    <Banner
      src="https://img.freepik.com/free-psd/digital-marketing-facebook-banner-template_237398-233.jpg?size=626&ext=jpg"
      link="https://ru.freepik.com/free-photos-vectors/banner"
      title="Какой-то баннер" />

    <Weather
      type="rainy"
      main="+17"
      morning="+17"
      night="+10"
    >Погода</Weather>

    <Visited>Посещаемое</Visited>
    <Tv>Телепрограмма</Tv>
    <Air>Эфир</Air>

  </>
)
export default Yandex;