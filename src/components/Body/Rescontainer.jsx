import Restaurant from "./Restaurant";
import resData from "../../utils/mockData";
const Rescontainer = () => {
  return (
    <div className="res_list_container">
      {resData.map((res, index) => {
        return (
          <Restaurant
            key={index}
            img={res.img}
            res_name={res.res_name}
            rating={res.rating}
            price={res.price}
          />
        );
      })}
    </div>
  );
};
export default Rescontainer;
