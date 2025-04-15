import "./App.css";
import res_1 from "./assets/res_1.jpg";
import res_2 from "./assets/res_2.jpg";
import res_3 from "./assets/res_3.jpg";
import Header from "./components/Header";

const styles = {
  color: "red",
  fontSize: "40px",
};

const resData = [
  {
    res_name: "La pino'pizza",
    img: res_1,
    rating: "4.0",
  },
  {
    res_name: "Domino's pizza",
    img: res_2,
    rating: "4.3",
  },
  {
    res_name: "kfc",
    img: res_3,
    rating: "4.0",
  },
  {
    res_name: "La pino'pizza",
    img: res_1,
    rating: "4.0",
  },
  {
    res_name: "La pino'pizza",
    img: res_1,
    rating: "4.0",
  },
];

const Restaurant = ({ img, res_name, rating }) => {
  return (
    <div className="restaurant_wrapper">
      <div className="img_wrapper">
        <img src={img} alt="" />
      </div>

      <div className="desc_wrapper">
        <p>{res_name}</p>
        <p>{rating}</p>
        <p>300 for two</p>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div>
      <h1 style={styles}>Search container</h1>
    </div>
  );
};

const Rescontainer = () => {
  return (
    <div className="res_list_container">
      {resData.map((res) => {
        return (
          <Restaurant
            img={res.img}
            res_name={res.res_name}
            rating={res.rating}
          />
        );
      })}
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <Search />
      <Rescontainer />
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
