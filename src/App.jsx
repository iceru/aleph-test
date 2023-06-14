import building from "./assets/building.jpg";
import aleph from "./assets/alephLogoWhite.png";

import "./App.scss";

const App = () => {
  return (
    <div className="wrapper">
      <h1 className="title">
        <img src={aleph} alt="" />- Aleph Labs Test
      </h1>
      <div className="name">Muhamad Hafiz</div>
      <section>
        <div className="number">Number 1</div>
        <div className="card">
          <div className="card__image">
            <img src={building} alt="Background Image" />
          </div>
          <div className="card__text">
            <div className="card__title">Little Known Facts</div>
            <div className="card__subtitle">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container__black">
          <div className="number">Number 2</div>
          <div className="dropdown">
            <div className="dropdown__title">Our Works</div>
            <ul className="dropdown__content">
              <li>
                <a href="#">UI&UX Design</a>
              </li>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Development</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="number">Number 3</div>
        <div className="list">
          <div className="list__item">Telor ayam 1 butir</div>
          <div className="list__item">Minyak goreng 1/2 cup</div>
          <div className="list__item">Garam 1/2 sendok teh</div>
          <div className="list__item">Merica 1/2 sendok teh</div>
          <div className="list__item">Butter 1/2 sendok makan</div>
        </div>
      </section>
    </div>
  );
};

export default App;
