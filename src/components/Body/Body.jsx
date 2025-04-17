import Restaurant from "./Restaurant";
import resData from "../../utils/mockData";
import { useState } from "react";

const Body = () => {
  let resList = resData;
  const [resList2, SetResList2] = useState(resData);

  return (
    <div>
      <div>
        <h1>Search container</h1>
        <button
          onClick={() => {
            resList = resList.filter((res) => res.rating > 4.5);
            const filteredData = resList2.filter((res) => res.rating > 4.5);
            SetResList2(filteredData);
            console.log(resList);
          }}
        >
          Top Rated Restaurant
        </button>
        <button
          onClick={() => {
            resList = resList.filter((res) => res.price < 130);
            const filteredData = resList2.filter((res) => res.price < 130);
            SetResList2(filteredData);
            console.log(resList);
          }}
        >
          lowest price
        </button>
      </div>
      <div className="res_list_container">
        {resList2.map((res, index) => {
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
    </div>
  );
};

export default Body;
